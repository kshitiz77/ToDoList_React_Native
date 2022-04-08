import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import navigationString from './navigationString'

const AuthStack = (Stack) => {
  return (
    <>
       <Stack.Screen
                options={{ headerShown: false }}
                name={navigationString.LOGIN}
                component={LoginScreen}
            />
    </>
  )
}

export default AuthStack