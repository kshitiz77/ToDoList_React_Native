import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './styles';
import commonStyles from '../../styles/commonStyles';
import navigationString from '../../navigation/navigationString';
import { useSelector } from 'react-redux';
import { getToDoDetails } from '../../utils/utils';
import types from '../../redux/types';
import imagesPath from '../../constants/imagesPath'
import actions from '../../redux/actions';

const HomeScreen = ({ navigation }) => {
  const todoListDetails = useSelector((state) => state?.todoItemsFun?.todoItems)

console.log(todoListDetails)
  const handleSubmitBtn = () => {
    navigation.navigate(navigationString?.ToDoForm, {
      submitType: "create"
    })
  }
  const handleRemove = (e, items) => {
    actions.deleteToDoItems(items)
  }

  const handleEditDetails = (e, items) => {
    console.log(items.userId)
    navigation.navigate(navigationString.ToDoForm, {
      userId: items?.userId,
      name: items?.name,
      address: items?.address,
      phoneNumber: items?.address,
      age: items?.age,
      rollNumber: items?.rollNumber,
      submitType: 'userEdit'
    });
  }



  return (
    <View style={commonStyles.screenContainer}>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {todoListDetails?.length > 0 ?
          <ScrollView scrollEnabled={true}>
            {todoListDetails?.map((items, index) => (
              <View style={styles.todoListContainer} key={index}>
                <View style={styles.todoList}>
                  <Text style={styles.todoListText}>Name : {items?.name}</Text>
                  <Text style={styles.todoListText}>Address : {items?.address}</Text>
                  <Text style={styles.todoListText}>Phone No. : {items?.phoneNumber}</Text>
                  <Text style={styles.todoListText}>Age : {items?.age}</Text>
                  <Text
                    style={styles.todoListText}>Roll No. : {items?.rollNumber} </Text>
                </View>
                <View>


                  <TouchableOpacity onPress={(e) => handleRemove(e, items)}>
                    <Image source={imagesPath.deleteIcon} style={styles.cardDetailsIcons} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={(e) => handleEditDetails(e, items)}>
                    <Image source={imagesPath.editIcon} style={styles.cardDetailsIcons} resizeMode='contain' />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          : null
        }

        {todoListDetails.length === 0 ? <TouchableOpacity
          style={commonStyles.btnContainer}
          onPress={handleSubmitBtn}
        >
          <Text style={commonStyles.btn}>Add Task</Text>
        </TouchableOpacity> : null
        }
      </View>
        <View style={styles.logoutBtnContainer}>
          <TouchableOpacity style={styles.logoutTaskBtn} onPress={actions.logout}>
            <Text style={styles.logoutBtnText}>Logout</Text>
          </TouchableOpacity>
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