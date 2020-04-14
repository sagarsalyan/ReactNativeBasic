import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class PickerX extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View style = {styles.container}>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}
export default PickerX

const styles = StyleSheet.create({
   container:{
     marginTop:30
   },
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})
