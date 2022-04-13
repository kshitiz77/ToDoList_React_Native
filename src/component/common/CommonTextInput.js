import React from 'react'
import { View, Text, TextInput } from 'react-native'
import commonStyles from '../../styles/commonStyles'

const CommonTextInput = (props) => {
  return (
    <>
    <TextInput
        placeholder={props.placeHolder}
        style={commonStyles.inputField}
        value={props.value}
        onChangeText={props.handleFunction}
        secureTextEntry={props.secureTextEntry}
      />
      {
        props.error ? 
        <Text style={commonStyles.inputFieldError}>{props.errorText}</Text>
        : null
      }
    </>
  )
}

export default CommonTextInput