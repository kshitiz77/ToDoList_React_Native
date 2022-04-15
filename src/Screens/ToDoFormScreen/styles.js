import { StyleSheet, Dimensions } from 'react-native'

import { height, width, moderateScaleVertical } from '../../styles/responsiveSize'

const styles = StyleSheet.create({
    todoFormContainer:{
        height:height,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:moderateScaleVertical(10),
        width:width
    }
})

export default styles