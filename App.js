import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaView, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ToDoForm from './src/screens/ToDoForm';
import styles from './src/styles/styles';
import Routes from './src/navigation/Routes';
import store from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <SafeAreaProvider >
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
};


export default App;
