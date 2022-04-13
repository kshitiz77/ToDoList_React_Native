import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from './src/navigation/Routes';
import store from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {

  function getAppData() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem('toDoDetails').then(data => {
        resolve(JSON.parse(data));
        console.log(data)
      });
    });
  }

  getAppData()

  return (
    <SafeAreaProvider >
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
};


export default App;
