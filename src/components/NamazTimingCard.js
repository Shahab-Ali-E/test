import { View, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

//styled
import {CustomText} from './StyleComponent/StyledComponent'

const NamazTimingCard = ({NamazName , Time, Image }) => {
    
    return(
          <View style={styles.container}>
              <View style={styles.imageWrapper}>
                  <ImageBackground source={Image} resizeMode='cover' style={styles.imageStyle}>
                      <View style={styles.txtContainer}>
                          <CustomText color='#ffff' fontWeight='bold'  fontSize='27' marginLeft='27'>{NamazName}</CustomText>
                      </View>
                      <View style={styles.txtContainer}>
                      <CustomText color='#ffff' fontWeight='bold'  fontSize='27' marginLeft='28'>{Time}</CustomText>
                      </View>
                  </ImageBackground>
              </View>
          </View>
    )
  }
  
  const styles = StyleSheet.create({
      container: {
          height: 90,
          margin: 8,
          borderRadius: 20,
          overflow: 'hidden',
      },
      imageWrapper: {
          flex: 1,
          borderRadius: 20,
          overflow: 'hidden',
          elevation:5,
      },
      imageStyle: {
          flex: 1,
          padding:12,
          flexDirection: 'row',
      },
      txtContainer: {
          flex: 1,
          justifyContent: 'flex-start',
      },
  })
export default NamazTimingCard