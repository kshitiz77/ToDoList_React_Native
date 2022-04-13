import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    loginScreenBodyContainer: {
        width: width / 1.5
      },
})

export default styles