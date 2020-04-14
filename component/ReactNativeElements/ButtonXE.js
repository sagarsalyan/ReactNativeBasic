import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Avatar, Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonXE = () => {
 return (
   <View>
      <Button
       title="Solid Button"
      />

      <Button
       title="Outline button"
       type="outline"
      />

      <Button
       title="Clear button"
       type="clear"
      />

      <Button
       icon={
         <Icon
           name="arrow-right"
           size={15}
           color="white"
         />
       }
       title="Button with icon component"
      />

      <Button
       icon={{
         name: "arrow-right",
         size: 15,
         color: "white"
       }}
       title="Button with icon objectttt"
      />

      <Button
       icon={
         <Icon
           name="arrow-right"
           size={15}
           color="white"
         />
       }
       iconRight
       title="Button with right icon"
      />

      <Button
       title="Loading buttonn"
       loading = "true"
      />
   </View>
 )
}
export default ButtonXE
