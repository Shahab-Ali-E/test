import { View, Text } from 'react-native'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { Image } from 'react-native'

const LoadingScreen = ({visible}) => {
  return (
    <View>
      <Spinner 
          visible={visible}
          size={30}
          animation={'fade'}
          color='#6C1CF0'
          customIndicator={<View><Image source={require('../../../assets/Images/loadingGIF.gif')} style={{height:100,width:100}}/></View>}
        />
    </View>
  )
}

export default LoadingScreen