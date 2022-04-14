import React from 'react'
import { Home } from '../Screens';
import { ToDoFrom } from '../Screens';
import navigationString from './navigationString'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={navigationString.HOME}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={navigationString.HOME}
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={navigationString.ToDoForm}
          component={ToDoFrom}
        />
      </Stack.Navigator>
  )
}

export default HomeStack