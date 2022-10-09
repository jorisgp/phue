import {Service} from 'react-native-zeroconf';

const isIpaddress = (value: string): boolean => {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      value,
    )
  ) {
    return true;
  }
  return false;
};

const getHueServerAddress = (service: Service): string | undefined => {
  return service?.addresses.find((value: string) => isIpaddress(value));
};

export {isIpaddress, getHueServerAddress};
