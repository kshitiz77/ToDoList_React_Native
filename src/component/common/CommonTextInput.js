import React from 'react'
import { View, Text, Dimensions, TextInput } from 'react-native'
import commonStyles from '../../styles/commonStyles'

const CommonTextInput = (props) => {
  return (
    <>
      <View style={commonStyles?.textInputArea}>
        <TextInput
          placeholder={props?.placeHolder}
          style={commonStyles.inputField}
          value={props?.value}
          onChangeText={props?.handleFunction}
          secureTextEntry={props?.secureTextEntry}
        />
      </View>

      {
        props?.error ?
          <Text style={commonStyles?.inputFieldError}>{props?.errorText}</Text>
          : null
      }
    </>
  )
}

export default CommonTextInput