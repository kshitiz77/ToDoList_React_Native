import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('window').width;

const commonStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor:'#000',
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
    textAlign: 'center',
    width: width / 1.5
  },
  inputFieldError:{
    color:'red'
  },
  btnContainer: {
    backgroundColor: '#0058ab',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
  },
  btn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    width: width / 1.5,
    textAlign: 'center'
  },
})

export default commonStyles