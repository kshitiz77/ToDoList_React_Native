import { Dimensions, StyleSheet } from 'react-native'
import colors from './colors';
import {scale,
  verticalScale,
  textScale,
  moderateScale,
  moderateScaleVertical,
  width,
  height,
  sliderWidth,
  itemWidth,
  StatusBarHeight,
  StatusBarHeightSecond,} from './responsiveSize'

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
    fontSize: textScale(15),
    fontWeight: '600',
    marginVertical: moderateScaleVertical(8),
    textAlign:'left',
  },
  inputFieldError:{
    color:colors.redColor
  },
  btnContainer: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScaleVertical(12),
    borderRadius: 8,
  },
  btn: {
    color: colors.white,
    fontSize: textScale(18),
    fontWeight: '600',
    width: width / 1.5,
    textAlign: 'center'
  },
})

export default commonStyles