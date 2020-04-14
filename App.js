import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import FlexBox from './component/FlexBox';
import List from './component/List';
import Input from './component/Input';
import ScrollViewX from './component/ScrollViewX';
import ImageX from './component/ImageX';
import HttpX from './component/HttpX';
import ButtonX from './component/ButtonX';
import Animations from './component/Animations';
// import WebViewX from './component/WebViewX';
import ModalX from './component/ModalX';
import ActivityIndicatorX from './component/ActivityIndicatorX';
import PickerX from './component/PickerX';
// import SwitchX from './component/SwitchX';
import TextX from './component/TextX';
import AlertX from './component/AlertX';
import GeoLocationX from './component/GeoLocationX';
import AsyncStorageX from './component/AsyncStorageX';
import SectionListX from './component/SectionListX';

export default class App extends React.Component {
  constructor() {
      super();
      this.state = {
         switchValue: false,
      }
   }
   toggleSwitch = (value) => {
      this.setState({switchValue: value})
      console.log('Switch is: ' + value)
   }
  render(){
    return (
      <View>
        {/* <ScrollView>
        <FlexBox/>
        <List/>
        <Input/>
        </ScrollView>
        <ScrollViewX/>
        <ImageX/>
        <HttpX/>
        <ButtonX/>
        <Animations/>
        <WebViewX/>
        <ModalX/>
        <ActivityIndicatorX/>
        <PickerX/>
        <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#55c25b" translucent = {false}/>
        <SwitchX toggleSwitch = {this.toggleSwitch} switchValue = {this.state.switchValue}/>
        <TextX/>
        <AlertX/>
        <GeoLocationX/>
        <AsyncStorageX/> */}
        <SectionListX/>
      </View>
    );
  }
}
