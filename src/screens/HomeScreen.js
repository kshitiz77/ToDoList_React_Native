import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import styles from '../styles/styles';
import navigationString from '../navigation/navigationString';

const HomeScreen = ({navigation}) => {

  const handleSubmitBtn = () =>{
    navigation.navigate(navigationString.ToDoForm)
  }
  return (
    <View style={styles.screenContainer}>
      <View style={styles.todoListContainer}>
        <View style={styles.todoList}>
          <Text style={styles.todoListText}>Name : </Text>
          <Text style={styles.todoListText}>Address : </Text>
          <Text style={styles.todoListText}>Phone No. : </Text>
          <Text style={styles.todoListText}>Age : </Text>
          <Text style={styles.todoListText}>Roll No. : </Text>
        </View>
        <TouchableOpacity
          style={styles.btnContainer}
        onPress={handleSubmitBtn}
        >
          <Text style={styles.btn}>Add Task</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.addMoreTaskBtnContainer}>
        <TouchableOpacity style={styles.addMoreTaskBtn} onPress={handleSubmitBtn}>
          <Text style={styles.addMoreTaskBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen