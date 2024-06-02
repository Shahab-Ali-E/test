import {Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'

const CustomMorePageButton = ({iconImage , iconText , navigator , toNaviagte}) => {
  return (
    <Pressable
    android_ripple={{ 
      color: 'rgba(229, 239, 238,1)', 
      borderless: false, 
      radius: 60, 
    }}
    style={styles.View}
        onPressIn={()=>{navigator.navigate(toNaviagte)}}
    >
        <Image source={iconImage} style={styles.icon}/>
        <Text style={styles.text}>{iconText}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  View:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#7116f1',
      borderColor:'#E0A83F',
      borderWidth:3,
      padding: 25,
      height:120,
      width:120,
      borderRadius: 200,
      elevation: 10,
  },
  text:{
      color:'white',
      fontWeight:'bold',
      fontSize:14,
  },
  icon:{
      height:40,
      width:40,
      color:'white',
      paddingBottom:10,
  }
});
export default CustomMorePageButton