import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native'
import { Avatar, Button, Input, CheckBox  } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

class CheckBoxX extends Component {
  state = {
     checked: true
  }
  render(){
    return (
      <View>
      <CheckBox
        title='Click Here'
        checked={this.state.checked}
        onPress={() => this.setState({checked: !this.state.checked})}
       />
       <CheckBox
          center
          title='Click Here'
          checked={this.state.checked}
        />

        <CheckBox
          center
          title='Click Here'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.checked}
        />

        <CheckBox
          center
          title='Click Here to Remove This Item'
          iconRight
          iconType='material'
          checkedIcon='clear'
          uncheckedIcon='add'
          checkedColor='red'
          checked={this.state.checked}
        />

        <CheckBox
          checkedIcon={<Image source={require('./checked.png')} style = {{ width: 100, height: 100 }} />}
          uncheckedIcon={<Image source={require('./unchecked.png')} style = {{ width: 100, height: 100 }} />}
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
        />
      </View>
    )
  }

}
export default CheckBoxX;
