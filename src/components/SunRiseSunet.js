import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

//icons
import { Feather } from '@expo/vector-icons'
import { HeadingView } from './StyleComponent/StyledComponent'

const SunRiseSunet = ({sunRise , sunSet}) => {
  return (
    <HeadingView >
      <View style={styles.sunRise}>
        <Text style={styles.text}>Sunrise</Text>
        <Feather name="sunrise" size={28} color="black" />
        <Text style={styles.text}>{sunRise}</Text>
      </View>
      <View style={styles.zawal}>
        <Text style={styles.text}>Zawal</Text>
        <Text style={{fontSize:27,margin:-12}}>-----------------</Text>
        <Text style={styles.text}>11:57 am</Text>
      </View>
      <View style={styles.sunSet}>
        <Text style={styles.text}>Sunrise</Text>
        <Feather name="sunset" size={28} color="black" />
        <Text style={styles.text}>{sunSet}</Text>
      </View>
    </HeadingView>
  )
}

const styles=  StyleSheet.create({
    zawal:{
        flex:1,
        alignItems:'center',
    },
    sunRise: {
        flex:0.5,
        alignItems:'center',
    },
    sunSet:{
        flex:0.5,
        alignItems:'center',
    },
    text:{
        fontSize:17,
    }
})
export default SunRiseSunet