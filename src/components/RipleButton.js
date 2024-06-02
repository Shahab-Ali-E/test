import { View, Text ,Pressable ,StyleSheet, Image} from 'react-native'
import React from 'react'

const RipleButton = ({onPress}) => {
  return (
          <View style={styles.secondOuterCircle}>
            <Pressable
              onPress={onPress} 
              style={styles.FindMosquesNearbyButton}
              android_ripple={{ 
                color: 'rgba(229, 239, 238,1)', 
                borderless: false, 
                radius: 74, 
              }}
            >
                <Image source={require('../../assets/Images/smartwatch.png')} style={styles.iconStyle}/>
            </Pressable>
          </View>
  )
}

const styles = StyleSheet.create({
      secondOuterCircle:{
        backgroundColor:'rgba(113, 22, 241,0.5)', 
        borderRadius:150,
        padding: 5,
      },
      FindMosquesNearbyButton:{
        borderRadius:150,
        height:150,
        width:150,
        backgroundColor:'#7116f1',
        alignItems:'center',
        justifyContent:'center',
        elevation:10, 
      },
      btnText:{
        fontSize:17,
        fontWeight:'bold',
      },
      iconStyle:{
       height:75,
      }
})

export default RipleButton