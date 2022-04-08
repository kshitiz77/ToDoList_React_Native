import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/styles'

const ToDoForm = () => {
const [name, setName] = useState('')
const [address, setAddress] = useState('')
const [phoneNumber, setPhoneNumber] =  useState('')
const [age, setAge] = useState('')
const [rollNumber, setRollNumber] = useState('')

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
  console.log(name, address, phoneNumber, age, rollNumber)
  }
  return (
    <View style={styles.screenContainer}>
      <TextInput
        placeholder='Enter Your Name'
        style={styles.inputField}
        value={name}
        onChangeText={(name) => handleName(name)}
      />

      <TextInput
        placeholder='Enter Your Address'
        style={styles.inputField}
        dataDetectorTypes="address"
        value={address}
        onChangeText={(address) => handleAddress(address)}
      />

      <TextInput
        placeholder='Enter Your Phone No.'
        style={styles.inputField}
        keyboardType="numeric"
        dataDetectorTypes="phoneNumber"
        value={phoneNumber}
        onChangeText={(phoneNumber) => handlePhoneNumber(phoneNumber)}
      />

      <TextInput
        placeholder='Enter Your Age'
        style={styles.inputField}
        keyboardType="numeric"
        value={age}
        onChangeText={(age) => handleAge(age)}
      />

      <TextInput
        placeholder='Enter Your Roll No.'
        style={styles.inputField}
        keyboardType="numeric"
        value={rollNumber}
        onChangeText={(rollNumber) => handleRollNumber(rollNumber)}
      />

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