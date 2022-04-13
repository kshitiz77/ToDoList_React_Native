import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    todoFormContainer:{
        height:height,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        width:width
    }
})

export default styles