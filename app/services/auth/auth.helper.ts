import AsyncStorage from "@react-native-async-storage/async-storage"
import { EnumAsyncStorage, EnumSecureStore, IAuthResponse, ITokens } from "app/types/auth.interface"
import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store"

export const getAccessToken = async () => {
  const accesToken = await getItemAsync(EnumSecureStore.ACCESS_TOKEN)

  return accesToken || null
}

export const saveTokensStorage = async (data: ITokens) => {
  await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data.accesToken)
  await setItemAsync(EnumSecureStore.REFRESH_TOKEN, data.refreshToken)
}

export const deleteTokensStorage = async () => {
  await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)
  await deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)
}

export const getUserFromStorage = async () => {
  try {
    return JSON.parse(
      (await AsyncStorage.getItem(EnumAsyncStorage.USER)) || '{}'
    )
  } catch (e) {
    null
  }
}

export const saveToStorage = async (data: IAuthResponse) => {
  await saveTokensStorage(data)
  try {
    await AsyncStorage.setItem(
      EnumAsyncStorage.USER,
      JSON.stringify(data.user)
    )
  } catch (error) {}
}
