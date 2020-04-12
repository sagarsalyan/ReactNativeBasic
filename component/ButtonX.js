import React, { Component } from 'react'
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native'

const ButtonX = () => {
   const handlePress = () => false
   return (
     <View>
      <Button
         onPress = {handlePress}
         title = "Red button!"
         color = "red"
      />
      <TouchableOpacity>
            <Text style = {styles.text}>
               Button
            </Text>
      </TouchableOpacity>
    </View>
   )
}
export default ButtonX

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'green'
   }
})
