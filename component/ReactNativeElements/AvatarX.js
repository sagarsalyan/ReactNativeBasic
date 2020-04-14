import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import { Avatar } from "react-native-elements";

const AvatarX = () => {
   return (
     <View>
       <Avatar
        rounded
        icon={{name: 'user', type: 'font-awesome'}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
      />
      <Avatar
        size="small"
        rounded
        icon={{name: 'user', type: 'font-awesome'}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
      />
      <Avatar
        size="medium"
        overlayContainerStyle={{backgroundColor: 'blue'}}
        icon={{name: 'meetup', color: 'red', type: 'font-awesome'}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{flex: 3, marginTop: 100}}
      />
      <Avatar
        size="large"
        icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
        overlayContainerStyle={{backgroundColor: 'white'}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{flex: 4, marginTop: 75}}
      />
      <Avatar
        size="xlarge"
        rounded
        icon={{name: 'home', type: 'font-awesome'}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{flex: 5, marginRight: 60}}
      />
      <Avatar
        size={200}
        rounded
        icon={{name: 'user', type: 'font-awesome'}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
      />
    </View>
   )
}
export default AvatarX
