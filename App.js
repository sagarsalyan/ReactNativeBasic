import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import FlexBox from './component/FlexBox';
import List from './component/List';
import Input from './component/Input';
import ScrollViewX from './component/ScrollViewX';
import ImageX from './component/ImageX';
import HttpX from './component/HttpX';
import ButtonX from './component/ButtonX';
import Animations from './component/Animations';

export default class App extends React.Component {
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
        <ButtonX/> */}
        <Animations/>
      </View>
    );
  }
}
