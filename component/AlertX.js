import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native'

const AlertX = () => {
   const showAlert = () =>{
      Alert.alert(
         'You need to...'
      )
   }
   return (
      <TouchableOpacity onPress = {showAlert} style = {styles.button}>
         <Text>Alert</Text>
      </TouchableOpacity>
   )
}
export default AlertX

const styles = StyleSheet.create ({
   button: {
      backgroundColor: '#4ba37b',
      width: 100,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 100
   }
})
