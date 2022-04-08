import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

const Routes = () => {
    const userStatus = false
  return (
   <NavigationContainer>
       <Stack.Navigator>
       {userStatus ? MainStack(Stack) : AuthStack(Stack)}
       </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Routes