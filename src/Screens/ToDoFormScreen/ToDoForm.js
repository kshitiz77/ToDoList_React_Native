import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import commonStyles from '../../styles/commonStyles'
import { useDispatch } from 'react-redux'
import types from '../../redux/types'
import navigationString from '../../navigation/navigationString'
import CommonTextInput from '../../component/common/CommonTextInput'

const ToDoForm = ({ navigation, route }) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [age, setAge] = useState('')
  const [rollNumber, setRollNumber] = useState('')

  const [nameError, setNameError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [phoneNumberError, setPhoneNumberError] = useState(false)
  const [ageError, setAgeError] = useState(false)
  const [rollNumberError, setRollNumberError] = useState(false)

  const userId = Math.floor(Math.random() * 10000)

  const params = route?.params

  const dispatch = useDispatch()

  const handleName = (name) => {
    setName(() => name)
  }

  const handleAddress = (address) => {
    setAddress(() => address)
  }

  const handlePhoneNumber = (phoneNumber) => {
    setPhoneNumber(() => phoneNumber)
  }

  const handleAge = (age) => {
    setAge(() => age)
  }

  const handleRollNumber = (rollNumber) => {
    setRollNumber(() => rollNumber)
  }

  const handleSubmitBtn = () => {
    if (params.submitType === 'create') {
      dispatch({
        type: types.CREATE_TODOITEMS,
        item: {
          userId: userId,
          name: name,
          address: address,
          phoneNumber: phoneNumber,
          age: age,
          rollNumber: rollNumber,
        }
      })
      navigation.navigate(navigationString.HOME)
    } else if (params.submitType === 'userEdit') {
      dispatch({
        type: types.UPDATE_TODOITEMS,
        item: {
          userId: params.userId,
          name: name,
          address: address,
          phoneNumber: phoneNumber,
          age: age,
          rollNumber: rollNumber,
        }
      })
      console.log(params.submitType)
      navigation.navigate(navigationString.HOME)
    }
  }

  return (
    <View style={commonStyles.screenContainer}>

      <CommonTextInput
        placeHolder="Enter Your Name"
        value={name}
        errorText="Please Enter Your Name"
        error={nameError}
        handleFunction={handleName} />

      <CommonTextInput
        placeHolder="Enter Your Address"
        value={address}
        errorText="Please Enter Your Address"
        error={addressError}
        handleFunction={handleAddress} />

      <CommonTextInput
        placeHolder="Enter Your Phone Number"
        value={phoneNumber}
        errorText="Please Enter Your Phone"
        error={phoneNumberError}
        handleFunction={handlePhoneNumber} />

      <CommonTextInput
        placeHolder="Enter Your Age"
        value={age}
        errorText="Please Enter Your Age"
        error={ageError}
        handleFunction={handleAge} />

      <CommonTextInput
        placeHolder="Enter Your Roll Number"
        value={rollNumber}
        errorText="Please Enter Your Roll Number"
        error={rollNumberError}
        handleFunction={handleRollNumber} />
      {(() => {
        if (params.submitType === 'create') {
          return (
            <TouchableOpacity
              style={commonStyles.btnContainer}
              onPress={handleSubmitBtn}
            >
              <Text style={commonStyles.btn}>Submit</Text>
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
        style={commonStyles.btnContainer}
        onPress={handleSubmitBtn}
      >
        <Text style={commonStyles.btn}>Update</Text>
      </TouchableOpacity>
        );
      })()}

      
    </View>
  )
}
export default ToDoForm