import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import styles from './styles';
import commonStyles from '../../styles/commonStyles';
import navigationString from '../../navigation/navigationString';
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import CommonTextInput from '../../component/common/CommonTextInput';

const LoginScreen = ({naigation}) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const userData = {
        email: email,
        password : password
    }
    const handleEmail = (email) => {
        setEmail(() => email)
    }

    const handlePassword = (password) => {
        setPassword(() => password)
    }

    const handleSubmitBtn = () => {
        if (email === "") {
            setEmailError(true)
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            setEmailError(true)
        } else if (password === "") {
            setEmailError(false)
            setPasswordError(true)
        } else if (password.length < 6) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
            console.log(email, password)
            actions.login(userData)
        }
    }
    return (
        <View style={commonStyles.screenContainer}>
            <View style={styles.loginScreenBodyContainer}>

                <CommonTextInput 
                placeHolder='Enter Your Email'
                value={email}
                handleFunction={(name) => handleEmail(name)}
                keyboardType="email-address"
                />
                {
                    emailError ? <Text style={commonStyles.inputFieldError}>Please Enter Your Correct Email</Text> : null
                }

                <CommonTextInput
                placeHolder='Enter Your Password'
                value={password}
                handleFunction={(name) => handlePassword(name)}
                keyboardType="email-address"
                secureTextEntry={true}
                />
                
                {
                    passwordError ? <Text style={commonStyles.inputFieldError}>Please Enter Your Correct Password</Text> : null
                }
                <TouchableOpacity
                    style={commonStyles.btnContainer}
                    onPress={handleSubmitBtn}
                >
                    <Text style={commonStyles.btn}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default LoginScreen