import React from 'react'
import HomeStack from './HomeStack'
import navigationString from './navigationString'

const MainStack = (Stack) => {
  return (
    <>
      <Stack.Screen
        name={navigationString.HOME}
        component={HomeStack}
        options={{ headerShown: false }}
      />
    </>
  )
}

export default MainStack