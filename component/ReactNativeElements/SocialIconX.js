import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { Avatar, Button, Input, CheckBox, SocialIcon } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

class SocialIconX extends Component {
  render(){
    return (
      <View>
      <SocialIcon
        type='twitter'
      />
      <SocialIcon
        raised={false}
        type='gitlab'
      />

      <SocialIcon
        light
        type='medium'
      />

      <SocialIcon
        light
        raised={false}
        type='medium'
      />

      <SocialIcon
        title='Sign In With Facebook'
        button
        type='facebook'
      />
      <SocialIcon
  title='Some Twitter Message'
  button
  type='twitter'
/>

<SocialIcon
  button
  type='medium'
/>

<SocialIcon
  button
  light
  type='instagram'
/>
      </View>
    )
  }
}
export default SocialIconX;
