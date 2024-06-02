import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

//components
import MonthlyChart from '../components/MonthlyChartComp/MonthlyChart'
import MyAddress from '../components/MyAddress/MyAddress'
import { CustomText,  HeadingView } from '../components/StyleComponent/StyledComponent'

//functions
import getTodayDate from '../components/Functions/getTodayDate'

const month = getTodayDate().split(' ')[1]


const PrayerTimingMonthly = () => {
  return (
    <View style={{flex:1 , marginBottom:70,padding:17}}>
      <View style={{flex:1.45}}>
          <MyAddress />
      </View>
      <HeadingView >
        <CustomText fontSize='20px' fontWeight='bold' color='#7116f1' >Month of {month} Prayer Timing</CustomText>
      </HeadingView>
      <View style={{flex:7}}>
        <MonthlyChart />
      </View>
    </View>
  )
}

export default PrayerTimingMonthly