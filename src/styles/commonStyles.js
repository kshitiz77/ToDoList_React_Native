import { Dimensions, StyleSheet } from 'react-native'
import colors from './colors';
const width = Dimensions.get('window').width;

const commonStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor:colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputArea:{
    width:width/1.5
  },
  inputField: {
    backgroundColor: colors.white,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
    textAlign:'left',
  },
  inputFieldError:{
    color:colors.redColor
  },
  btnContainer: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
  },
  btn: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    width: width / 1.5,
    textAlign: 'center'
  },
})

export default commonStyles