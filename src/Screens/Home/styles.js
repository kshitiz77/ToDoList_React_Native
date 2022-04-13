import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    todoListContainer: {
        justifyContent: 'center',
        width:width/1.1,
        borderRadius:8,
        backgroundColor: '#696969',
        flexDirection:'row',
        margin:5,
      },
      todoListText: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 8,
        fontWeight: '500'
      },
      addMoreTaskBtnContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
      },
      addMoreTaskBtn: {
        backgroundColor: '#0058ab',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 20,
        marginRight: 20,
        width: 50,
        height: 50,
        justifyContent: 'center'
      },
      addMoreTaskBtnText: {
        color: '#fff',
        fontSize: 30,
      },
      todoList:{
    width:width/1.5
      },
      deleteImg:{
        width: 50,
        height:50,
        marginVertical:10
      }
}) 

export default styles