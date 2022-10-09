import {DataKey} from '../constants/constants';
import DataService from './DataService';
import axios from 'axios';
import {getHueServerAddress} from '../utils/GenericUtils';
import DeviceInfo from 'react-native-device-info';
import {HueV1API, HueV1Light} from '../constants/hueV1Types';
import Zeroconf, {Service} from 'react-native-zeroconf';
import HueV1Mapper from '../mappers/HueV1Mapper';

const fetchHub = async (): Promise<Service> => {
  const zeroconf = new Zeroconf();
  zeroconf.scan('hue', 'tcp', 'local.');

  return new Promise(resolve => {
    zeroconf.on('resolved', server => {
      zeroconf.removeDeviceListeners();
      resolve(server);
    });
  });
};

const saveHub = async (): Promise<Service | any> => {
  const apiResult = await fetchHub();
  await DataService.storeDataObject(DataKey.HUE_V1_HUB, apiResult);
  return apiResult;
};

const fetchUsername = async (): Promise<HueV1API> => {
  const service: any = await DataService.getDataObject(DataKey.HUE_HUB);
  const ipaddress = getHueServerAddress(service);
  const url = `http://${ipaddress}/api`;
  const deviceType = `app_name#${DeviceInfo.getDeviceId()}`;

  const response = await axios({
    method: 'post',
    url,
    data: {
      devicetype: deviceType,
    },
  }).catch(error => {
    console.log('error', error);
  });

  console.log(
    'HueV1LightService - fetchUsername -  response?.data',
    response?.data,
  );
  return response?.data;
};

const saveUsername = async (): Promise<HueV1API> => {
  const apiResult = await fetchUsername();
  console.log('HueV1LightService - saveUsername -  apiResult:', apiResult);
  await DataService.storeDataObject(DataKey.HUE_V1_USERNAME, apiResult);
  return apiResult;
};

const executeHueService = async (
  resource: string,
  method: 'get' | 'post' | 'put',
  data: any,
) => {
  let hueHub = (await DataService.getDataObject(DataKey.HUE_HUB)) as Service;

  if (!hueHub) {
    hueHub = await saveHub();
  }

  const ipAddress = getHueServerAddress(hueHub);

  let usernameResult = (await DataService.getDataObject(
    DataKey.HUE_V1_USERNAME,
  )) as HueV1API;

  if (!usernameResult || !usernameResult[0]?.success?.username) {
    usernameResult = await saveUsername();
  }

  const username = usernameResult[0]?.success?.username;

  const url = `http://${ipAddress}/api/${username}/${resource}`;

  console.log('HueV1LightService - excuteHueService: ', url);
  console.log('HueV1LightService - username: ', username);

  return await axios({
    url,
    method,
    headers: {
      'Content-type': 'Application/json',
      Accept: 'Application/json',
    },
    data: data ? data : undefined,
  })
    .then(response => {
      console.log(
        'HueV1LightService - excuteHueService: - response: ',
        response.data,
      );
      return response.data;
    })
    .catch(error => {
      console.log('HueV1LightService - excuteHueService - error: ', error);
    });
};

const fetchDeviceList = async () => {
  return await executeHueService('light', 'get', undefined);
};
const fetchLightList = async () => {
  return await executeHueService('lights', 'get', undefined);
};

const saveLightsList = async () => {
  const lightsResult = await fetchLightList();
  const lightList = HueV1Mapper.mapToLightsArray(lightsResult);
  DataService.storeDataObject(DataKey.HUE_V1_LIGHTS, lightList);
  return lightList;
};

const fetchLight = async (light: HueV1Light): Promise<HueV1Light> => {
  return await executeHueService(`lights/${light.id}`, 'get', undefined);
};

const toggleLight = async (light: HueV1Light) => {
  const currentLight = await fetchLight(light);
  return await executeHueService(`lights/${light.id}/state`, 'put', {
    hue: 50000,
    on: !currentLight.state.on,
    bri: 200,
  });
};

const toggleLightInterval = async (light: HueV1Light) => {
  setTimeout(async () => {
    const currentLight = await fetchLight(light);
    console.log('currentLight: ', currentLight);
    return await executeHueService(`lights/${light.id}/state`, 'put', {
      hue: 50000,
      on: !currentLight.state.on,
      bri: 200,
    });
  }, 0);
};

export default {
  fetchLightList,
  fetchUsername,
  fetchDeviceList,
  saveLightsList,
  toggleLight,
  toggleLightInterval,
};
