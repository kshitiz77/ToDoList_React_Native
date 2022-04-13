import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import styles from './styles';
import commonStyles from '../../styles/commonStyles';
import navigationString from '../../navigation/navigationString';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth'
import CommonTextInput from '../../component/common/CommonTextInput';

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
        // if (email === "") {
        //     console.log('Please Enter Your Email Address');
        // } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        //     console.log('Please Enter Your Correct Email Address');
        // } else if (password === "") {
        //     console.log('Please Enter Your Password');
        // } else if (password.length < 6) {
        //     console.log('Please Enter Correct Password');
        // } else {
            console.log(email, password)
            dispatch(login())
        // }
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


                <CommonTextInput
                placeHolder='Enter Your Password'
                value={password}
                handleFunction={(name) => handlePassword(name)}
                keyboardType="email-address"
                secureTextEntry={true}
                />

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