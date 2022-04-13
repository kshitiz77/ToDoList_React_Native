import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import ToDoForm from './src/screens/ToDoForm';
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
