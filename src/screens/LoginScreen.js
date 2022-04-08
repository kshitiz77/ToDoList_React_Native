import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import styles from '../styles/styles';
import navigationString from '../navigation/navigationString';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth'

const LoginScreen = ({naigation}) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (email) => {
        setEmail(() => email)
    }

    const handlePassword = (password) => {
        setPassword(() => password)
    }

    const handleSubmitBtn = () => {
        if (email === "") {
            console.log('Please Enter Your Email Address');
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            console.log('Please Enter Your Correct Email Address');
        } else if (password === "") {
            console.log('Please Enter Your Password');
        } else if (password.length < 6) {
            console.log('Please Enter Correct Password');
        } else {
            console.log(email, password)
            dispatch(login())
        }
    }
    return (
        <View style={styles.screenContainer}>
            <View style={styles.loginScreenBodyContainer}>

                <TextInput
                    placeholder='Enter Your Email'
                    style={styles.inputField}
                    value={email}
                    onChangeText={(email) => handleEmail(email)}
                    keyboardType="email-address"
                />

                <TextInput
                    placeholder='Enter Your Password'
                    style={styles.inputField}
                    value={password}
                    onChangeText={(password) => handlePassword(password)}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={handleSubmitBtn}
                >
                    <Text style={styles.btn}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default LoginScreen