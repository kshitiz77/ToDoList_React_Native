import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const Routes = () => {
    const userStatus = useSelector((state) => state?.userStatus?.userData)
    console.log(userStatus)
  return (
   <NavigationContainer>
       <Stack.Navigator>
       {userStatus != null ? MainStack(Stack) : AuthStack(Stack)}
       </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Routes