import HueLightService from '../services/HueV1LightService';

const saveLights = async () => {
  const lights: any = await HueLightService.saveLightsList();
  console.log('PhueController - saveLights - lights: ', lights);
};

export default {saveLights};
