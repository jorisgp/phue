import AsyncStorage from '@react-native-async-storage/async-storage';
import {DataKey} from '../constants/constants';

const storeData = async (key: DataKey, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('error', error);
  }
};

const storeDataObject = async (key: DataKey, value: Object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log('error', error);
  }
};

const getData = async (key: DataKey): Promise<string | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return;
  } catch (error) {
    console.log('error', error);
  }
};

const getDataObject = async (key: DataKey): Promise<Object | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log('error', error);
  }
};

export default {
  storeData,
  storeDataObject,
  getData,
  getDataObject,
};
