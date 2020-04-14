import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { WebView } from 'react-native-webview'
export default class WebViewX extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text>Not Working... Have issue in WebView...</Text>
        {/*<WebView
          source = {{ uri: 'https://google.co.in' }}
          style={{ marginTop: 20 }}
        />*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
      height: 350,
   },
   textStyle:{
     marginTop:30,
   }
})
