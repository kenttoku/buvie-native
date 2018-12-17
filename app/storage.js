import { AsyncStorage } from 'react-native';

export const loadAuthToken = async () => {
  try {
    return await AsyncStorage.getItem('authToken');
  } catch(e) {
    return e
  }
};

export const saveAuthToken = async authToken => {
  try {
    await AsyncStorage.setItem('authToken', authToken);
  } catch (e) {}
};

export const clearAuthToken = async () => {
  try {
    await AsyncStorage.removeItem('authToken');
  } catch (e) {}
};
