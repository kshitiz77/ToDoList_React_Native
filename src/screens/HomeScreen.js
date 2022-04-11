import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from '../styles/styles';
import navigationString from '../navigation/navigationString';
import { useSelector } from 'react-redux';
import todoItemsFun from '../redux/reducers/todoItems';
import { useDispatch } from 'react-redux';
import types from '../redux/types';

const deleteImage = require('../assets/images/delete.png')
const editImage =  require('../assets/images/editing.png')

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const todoListDetails = useSelector((state) => state.todoItemsFun.todoItems)

  const handleSubmitBtn = () => {
    navigation.navigate(navigationString.ToDoForm)
  }
  const handleRemove = (e, userId) => {
    console.log(userId)
    dispatch({
      type: types.DELETE_TODOITEMS,
      userId: userId
    })
  }

  const handleEditDetails = (e, userId) => {
    console.log(userId)
    navigation.navigate(navigationString.ToDoForm, userId);
  }

  return (
    <View style={styles.screenContainer}>
      
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      {todoListDetails.length > 0 ?
        <ScrollView scrollEnabled={true}>
        { todoListDetails.map((items, index) => (
          <View style={styles.todoListContainer}>
            <View style={styles.todoList}>
              <Text style={styles.todoListText}>Name : {items.name}</Text>
              <Text style={styles.todoListText}>Address : {items.address}</Text>
              <Text style={styles.todoListText}>Phone No. : {items.phoneNumber}</Text>
              <Text style={styles.todoListText}>Age : {items.age}</Text>
              <Text style={styles.todoListText}>Roll No. : {items.rollNumber} </Text>
            </View>
            <View>

            
            <TouchableOpacity onPress={(e) => handleRemove(e, items.userId)}>
              <Image source={deleteImage} style={styles.deleteImg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => handleEditDetails(e, items.userId)}>
              <Image source={editImage} style={styles.deleteImg} resizeMode='contain' />
            </TouchableOpacity>
            </View>
          </View> 
        )) }
      </ScrollView>
      : null
      }
        
        {todoListDetails.length === 0 ? <TouchableOpacity
          style={styles.btnContainer}
          onPress={handleSubmitBtn}
        >
          <Text style={styles.btn}>Add Task</Text>
        </TouchableOpacity> : null
        }
      </View>


       {todoListDetails.length > 0 ?
        <View style={styles.addMoreTaskBtnContainer}>
          <TouchableOpacity style={styles.addMoreTaskBtn} onPress={handleSubmitBtn}>
            <Text style={styles.addMoreTaskBtnText}>+</Text>
          </TouchableOpacity> 
        </View> : null
      } 
    </View>
  )
}

export default HomeScreen