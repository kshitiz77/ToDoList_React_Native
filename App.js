import React,{useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from './src/navigation/Routes';
import store from './src/redux/store';
import dispatch from './src/redux/store'
import actions from './src/redux/actions';
import { Provider } from 'react-redux';
import { getToDoDetails , getUserData} from './src/utils/utils';

const App = () => {

  useEffect(()=>{

    getUserData().then((res)=>{
      console.log("store data",res)
      if(!!res){
        dispatch(actions.login(res))
      }
    })

    getToDoDetails().then((res)=>{
      console.log("store data",res)
      if(!!res){
        dispatch(actions.createToDoItems(res))
      }
    })


},[])
  return (
    <SafeAreaProvider >
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
};


export default App;
