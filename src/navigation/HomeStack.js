import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import ToDoForm from '../screens/ToDoForm'
import navigationString from './navigationString'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={navigationString.HOME}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={navigationString.HOME}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={navigationString.ToDoForm}
          component={ToDoForm}
        />
      </Stack.Navigator>
  )
}

export default HomeStack