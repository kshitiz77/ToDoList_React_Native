import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'
import { useDispatch } from 'react-redux'
import types from '../../redux/types'
import navigationString from '../../navigation/navigationString'
import CommonTextInput from '../../component/common/CommonTextInput'
import styles from './styles'

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


  useEffect(() => {
    if (params) {
      setName(params?.name)
      setAddress(params?.address)
      setPhoneNumber(params?.phoneNumber)
      setAge(params?.age)
      setRollNumber(params?.rollNumber)
    }
  }, [params])

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
    if (name === "" || name === undefined) {
      setNameError(true)
    } else if (address === "" || address === undefined) {
      setNameError(false)
      setAddressError(true)
    } else if (phoneNumber === "" || phoneNumber === undefined) {
      setAddressError(false)
      setPhoneNumberError(true)
    } else if (age === "" || age === undefined) {
      setPhoneNumberError(false)
      setAgeError(true)
    } else if (rollNumber === "" || rollNumber === undefined) {
      setAgeError(false)
      setRollNumberError(true)
    } else if (params?.submitType === "create") {
      setRollNumberError(false)
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
    } else if(params?.submitType === "userEdit"){
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
      console.log(params?.submitType)
      navigation.navigate(navigationString.HOME)
    }
  }
  return (
    <View style={commonStyles.screenContainer}>
      <ScrollView >

        <View style={styles.todoFormContainer}>
          <CommonTextInput
            placeHolder={'Enter Your Name'}
            value={name}
            errorText="Please Enter Your Name"
            error={nameError}
            handleFunction={handleName} />

          <CommonTextInput
            placeHolder={"Enter Your Address"}
            value={address}
            errorText="Please Enter Your Address"
            error={addressError}
            handleFunction={handleAddress} />

          <CommonTextInput
            placeHolder={"Enter Your Phone"}
            value={phoneNumber}
            errorText="Please Enter Your Phone"
            error={phoneNumberError}
            handleFunction={handlePhoneNumber} />

          <CommonTextInput
            placeHolder={"Enter Your Age"}
            value={age}
            errorText="Please Enter Your Age"
            error={ageError}
            handleFunction={handleAge} />

          <CommonTextInput
            placeHolder={"Enter Your Roll Number"}
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
      </ScrollView>
    </View>
  )
}
export default ToDoForm