import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Avatar, Button, Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

const InputX = () => {
 return (
   <View>

   <Input
     placeholder='BASIC INPUT'
    />

    <Input
      placeholder='INPUT WITH CUSTOM ICON'
      leftIcon={
        <Icon
          name='user'
          size={24}
          color='black'
        />
      }
    />
    <Input
      placeholder='INPUT WITH ERROR MESSAGE'
      errorStyle={{ color: 'red' }}
      errorMessage='ENTER A VALID ERROR HERE'
    />
   </View>
 )
}

export default InputX;
