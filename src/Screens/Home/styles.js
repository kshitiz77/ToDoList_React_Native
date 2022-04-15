import { StyleSheet, Dimensions } from 'react-native'

import colors from '../../styles/colors';

import {width,moderateScale, textScale, moderateScaleVertical} from '../../styles/responsiveSize'

const styles = StyleSheet.create({
    todoListContainer: {
        justifyContent: 'center',
        width:width/1.1,
        borderRadius:8,
        backgroundColor: colors.greyColor4,
        flexDirection:'row',
        margin:moderateScale(10),
      },
      todoListText: {
        color: colors.white,
        fontSize: textScale(20),
        marginVertical: moderateScaleVertical(8),
        fontWeight: '500'
      },
      logoutBtnContainer:{
        position:'absolute',
        left: 0,
        bottom: 0,
      },
      logoutTaskBtn:{
        backgroundColor:colors.blue,
        borderRadius:8,
        paddingVertical:moderateScaleVertical(5),
        paddingHorizontal:moderateScaleVertical(15),
        marginBottom:moderateScale(10),
        marginLeft:moderateScale(15)
      },
      addMoreTaskBtnContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
      },
      logoutBtnText:{
        fontSize:22,
        color:colors.white,
        fontWeight:'600'
      },
      addMoreTaskBtn: {
        backgroundColor: colors.blue,
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: moderateScale(15),
        marginRight: moderateScale(15),
        width: 50,
        height: 50,
        justifyContent: 'center'
      },
      addMoreTaskBtnText: {
        color: '#fff',
        fontSize: textScale(35),
      },
      todoList:{
    width:width/1.5
      },
      cardDetailsIcons:{
        width: 35,
        height:35,
        marginVertical:moderateScale(10)
      }
}) 

export default styles