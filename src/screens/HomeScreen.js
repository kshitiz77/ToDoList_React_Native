import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import styles from '../styles/styles';
import navigationString from '../navigation/navigationString';
import { useSelector } from 'react-redux';
import todoItemsFun from '../redux/reducers/todoItems';

const HomeScreen = ({ navigation }) => {
  const todoListDetails = useSelector((state) => state.todoItemsFun.todoItems)

  const handleSubmitBtn = () => {
    navigation.navigate(navigationString.ToDoForm)
  }

  return (
    <View style={styles.screenContainer}>
        {todoListDetails.map((items, index) => (
      <View style={styles.todoListContainer}>
          <View style={styles.todoList}>
            <Text style={styles.todoListText}>Name : {items.name}</Text>
            <Text style={styles.todoListText}>Address : {items.address}</Text>
            <Text style={styles.todoListText}>Phone No. : {items.phoneNumber}</Text>
            <Text style={styles.todoListText}>Age : {items.age}</Text>
            <Text style={styles.todoListText}>Roll No. : {items.rollNumber} </Text>
          </View>
        </View>
        ))}
        {todoListDetails.length === 0 ? <TouchableOpacity
          style={styles.btnContainer}
          onPress={handleSubmitBtn}
        >
          <Text style={styles.btn}>Add Task</Text>
        </TouchableOpacity> : null
        }
        

      <View style={styles.addMoreTaskBtnContainer}>
        {todoListDetails.length > 0 ? 
        <TouchableOpacity style={styles.addMoreTaskBtn} onPress={handleSubmitBtn}>
          <Text style={styles.addMoreTaskBtnText}>+</Text>
        </TouchableOpacity> : null
        }
      </View>
    </View>
  )
}

export default HomeScreen