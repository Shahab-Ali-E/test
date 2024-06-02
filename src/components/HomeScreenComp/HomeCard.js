import React from 'react'
import { CustomText ,CustomView} from '../StyleComponent/StyledComponent'
import { View } from 'react-native'

const HomeCard = ({background , NamazName , Title, Time}) => {
  return (
    <View style={{flex:1}}>
      <CustomView bg={background}>
        <View style={{flex:1}}>
            <CustomText 
            color={background == '#fff' ?  'black' : '#7116f1'} 
            fontWeight={background == '#fff' ?  '400' : 'bold'} 
            fontSize = '20'  
            marginLeft='0'>
            {Title}
            </CustomText>
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <CustomText 
            color='#0D5D64' 
            fontWeight='bold' 
            fontSize = '20'  
            marginLeft='0'>
            {NamazName}
            </CustomText>
            <CustomText 
            color='#0D5D64' 
            fontWeight='400' 
            fontSize = '20'  
            marginLeft='0'>
            {Time}
            </CustomText>
        </View>
      </CustomView>
    </View>
  )
}

export default HomeCard