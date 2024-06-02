import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TasbeehCard = (props) => {
  return (
    <View style={styles.Card}>
      {props.children}
    </View>
  )
}

const styles= StyleSheet.create({
    Card: {
        flex:1,
        backgroundColor:'#e2daf2',
        alignItems:'center',
        padding:20,
        margin:10,
        borderRadius:20,
        elevation:7,
    }
})
export default TasbeehCard