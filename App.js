import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import { SafeAreaView, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ToDoForm from './src/screens/ToDoForm';
import styles from './src/styles/styles';
import Routes from './src/navigation/Routes';

const App = () => {

  return (
      <SafeAreaProvider >
      <Routes />
      </SafeAreaProvider>
  );
};


export default App;
