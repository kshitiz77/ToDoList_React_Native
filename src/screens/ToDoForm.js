import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/styles'
import { useDispatch } from 'react-redux'
import types from '../redux/types'
import navigationString from '../navigation/navigationString'
import { URL } from 'uuid/dist/v35'

const ToDoForm = ({navigation, route}) => {
const [name, setName] = useState('')
const [address, setAddress] = useState('')
const [phoneNumber, setPhoneNumber] =  useState('')
const [age, setAge] = useState('')
const [rollNumber, setRollNumber] = useState('')

const [nameError, setNameError] = useState(false)
const [addressError, setAddressError] = useState(false)
const [phoneNumberError, setPhoneNumberError] = useState(false)
const [ageError, setAgeError] = useState(false)
const [rollNumberError, setRollNumberError] = useState(false)

const userId = Math.floor(Math.random() * 10000)

const updateUserId = route?.params

const dispatch = useDispatch()

const handleName = (name) =>{
  setName(() => name)
}

const handleAddress = (address) =>{
  setAddress(() => address)
}

const handlePhoneNumber = (phoneNumber) =>{
  setPhoneNumber(() =>phoneNumber)
}

const handleAge = (age) =>{
  setAge(() =>age)
}

const handleRollNumber =(rollNumber) =>{
  setRollNumber(() => rollNumber)
}

const handleSubmitBtn = () => {
  // if(name === ""){
  //   setNameError(true);
  // }else if(name !== ""){
  //   setNameError(false);
  // }else if(address === ""){
  //   setAddressError(true);
  // }else if(address !== ""){
  //   setAddressError(false)
  // }else if(phoneNumber === ""){
  //   setPhoneNumberError(true);
  // }else if(phoneNumber !== ""){
  //   setPhoneNumberError(false);
  // }else if(age === ""){
  //   setAgeError(true);
  // }else if(age !== ""){
  //   setAgeError(false);
  // }else if(rollNumber === ""){
  //   setRollNumberError(true);
  // }else if(rollNumber !== ""){
  //   setRollNumberError(false);
  // }else{
    dispatch({
      type : types.CREATE_TODOITEMS,
      item : {
        userId : userId,
        name : name,
        address : address,
        phoneNumber : phoneNumber,
        age : age,
        rollNumber : rollNumber,
      }
    })
    dispatch({
      type : types.UPDATE_TODOITEMS,
      item : {
        userId : updateUserId,
        name : name,
        address : address,
        phoneNumber : phoneNumber,
        age : age,
        rollNumber : rollNumber,
      }
    })
    console.log(updateUserId)
    navigation.navigate(navigationString.HOME)
// }
  }
  
  return (
    <View style={styles.screenContainer}>
      <TextInput
        placeholder='Enter Your Name'
        style={styles.inputField}
        value={name}
        onChangeText={(name) => handleName(name)}
      />
      {
        nameError ? 
        <Text style={styles.inputFieldError}>Please Enter Your Name</Text>
        : null
      }
      <TextInput
        placeholder='Enter Your Address'
        style={styles.inputField}
        dataDetectorTypes="address"
        value={address}
        onChangeText={(address) => handleAddress(address)}
      />
      {
        addressError ? 
        <Text style={styles.inputFieldError}>Please Enter Your Address</Text>
        : null
      }
      <TextInput
        placeholder='Enter Your Phone No.'
        style={styles.inputField}
        keyboardType="numeric"
        dataDetectorTypes="phoneNumber"
        value={phoneNumber}
        onChangeText={(phoneNumber) => handlePhoneNumber(phoneNumber)}
      />
      {
        phoneNumberError ? 
        <Text style={styles.inputFieldError}>Please Enter Your Phone Number</Text>
        : null
      }
      <TextInput
        placeholder='Enter Your Age'
        style={styles.inputField}
        keyboardType="numeric"
        value={age}
        onChangeText={(age) => handleAge(age)}
      />
      {
        ageError ? 
        <Text style={styles.inputFieldError}>Please Enter Your Age</Text>
        : null
      }
      <TextInput
        placeholder='Enter Your Roll No.'
        style={styles.inputField}
        keyboardType="numeric"
        value={rollNumber}
        onChangeText={(rollNumber) => handleRollNumber(rollNumber)}
      />
      {
        rollNumberError ? 
        <Text style={styles.inputFieldError}>Please Enter Your Roll Number</Text>
        : null
      }
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={handleSubmitBtn}
      >
        <Text style={styles.btn}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}
export default ToDoForm