// import {DataKey} from '../constants/constants';
// import DataService from './DataService';
// import axios from 'axios';
// import {getHueServerAddress} from '../utils/GenericUtils';
// import DeviceInfo from 'react-native-device-info';
// import { fetch } from 'react-native-ssl-pinning';

// const fetchUsername = async () => {
//   const service: any = await DataService.getDataObject(DataKey.HUE_HUB);
//   const ipaddress = getHueServerAddress(service);
//   const url = `http://${ipaddress}/api`;

//   return axios({
//     method: 'post',
//     url,
//     data: {
//       devicetype: `app_name#${DeviceInfo.getDeviceId()}`,
//       generateclientkey: true,
//     },
//   })
//     .then(response => {
//       console.log('fetchUsername - response: ', response.data);
//       return response?.data[0]?.success?.username;
//     })
//     .catch(error => {
//       console.log('error', error);
//     });
// };

// const executeHueService = async (resource: string, method: 'get' | 'post') => {
//   const service: any = await DataService.getDataObject(DataKey.HUE_HUB);
//   const username: any = await DataService.getData(DataKey.HUE_USERNAME);
//   const ipaddress = getHueServerAddress(service);

//   const url = `https://${ipaddress}/clip/v2/resource${resource}`;
//   console.log('HueLightService - excuteHueService: ', url);
//   console.log('HueLightService - username: ', username);

//   let config = {};

//   console.log(config);

//   fetch(url, {
//     method: 'GET',
//     sslPinning: {
//       certs: ['hue'],
//     },
//     headers: {
//       'hue-application-key': username,
//     },
//   })
//     .then(response => {
//       console.log(`response received ${response}`);
//     })
//     .catch(err => {
//       console.log(`error: ${err}`);
//     });
//   // return await axios({
//   //   url: 'https://192.168.1.151/clip/v2/resource/device',
//   //   method: 'get',
//   //   headers: {
//   //     'Content-type': 'Application/json',
//   //     Accept: 'Application/json',
//   //     'hue-application-key': username,
//   //   },
//   //   data: undefined,
//   // })
//   //   .then(response => {
//   //     console.log('fetchUsername - response: ', response.data);
//   //     return response;
//   //   })
//   //   .catch(error => {
//   //     console.log('error', error.response.data);
//   //   });
// };

// const fetchDeviceList = async () => {
//   return await executeHueService('/device', 'get');
// };

// const fetchLightList = async () => {
//   return await executeHueService('/device', 'get');
// };

// export default {fetchLightList, fetchUsername, fetchDeviceList};
