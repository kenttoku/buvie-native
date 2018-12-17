import { AsyncStorage } from 'react-native';

export const loadAuthToken = async () => {
  return await AsyncStorage.getItem('authToken');
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
