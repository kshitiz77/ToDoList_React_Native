import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToDoDetails = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('toDoDetails', jsonValue)
    return jsonValue
  } catch (e) {
    console.log("add_data store error")
  }
}
export const getToDoDetails = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('toDoDetails')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("add_data get error")
  }
}

