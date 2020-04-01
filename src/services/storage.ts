import * as SecureStore from 'expo-secure-store';
import { IPlayerData } from '../models';

export const StorageService = {
  storeSecurePlayerData: (playerData: IPlayerData): void => {
    SecureStore.setItemAsync('playerData', JSON.stringify(playerData));
  },

  retrieveSecurePlayerData: async (): Promise<IPlayerData> => {
    const raw: string = await SecureStore.getItemAsync('userData');
    return JSON.parse(raw);
  },
};
