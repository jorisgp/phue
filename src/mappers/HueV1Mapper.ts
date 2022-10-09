import {HueV1Light} from '../constants/hueV1Types';

const mapToLightsArray = (result: any): HueV1Light[] => {
  const resultArray: HueV1Light[] = Object.keys(result).map(item => {
    return {id: item, ...result[item]};
  });

  console.log('mapToLightsArray: ', resultArray);
  return resultArray;
};

export default {mapToLightsArray};
