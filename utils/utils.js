import AsyncStorage from "@react-native-async-storage/async-storage";

export function setToDoDetails(data) {
    data = JSON.stringify(data);
    return AsyncStorage.setItem('toDoDetails', data);
  }
export function getAppData() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem('toDoDetails').then(data => {
        resolve(JSON.parse(data));
        console.log(data)
      });
    });
  }