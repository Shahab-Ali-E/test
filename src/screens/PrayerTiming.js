import { View, Text } from 'react-native'
import React from 'react'

//function
import filterAPIData from '../components/Functions/filterAPIDataPerDayPray'

//component
import NamazTimingCard from '../components/NamazTimingCard'
import SunRiseSunet from '../components/SunRiseSunet'
import LoadingScreen from '../components/LoadingScreenComp/LoadingScreen'
import MyAddress from '../components/MyAddress/MyAddress'


//redux
import {useSelector} from 'react-redux'
import { CustomView } from '../components/StyleComponent/StyledComponent'
import { ScrollView } from 'react-native'


const PrayerTiming = () => {

  const data = JSON.parse(useSelector(state=>state.Reducer))
  const prayerData =filterAPIData(data.data);

  if (!data || prayerData.length == 0) {
    return (
      <LoadingScreen visible={true}/>
    ); 
  }
  
  return (
    <View style={{flex:1 , padding:7}}>
      <View style={{flex:1.93}}>
          <MyAddress />
      </View>
      <ScrollView>
        <SunRiseSunet sunRise={prayerData.Sunrise} sunSet={prayerData.Sunset}/>
      <View style={{flex:7}}>
          <NamazTimingCard NamazName="FAJR" Time={prayerData.Fajr} Image={require('../../assets/Images/FAJAR.jpg')}/>
          <NamazTimingCard NamazName="ZUHAR" Time={prayerData.Dhuhr} Image={require('../../assets/Images/ZuharImage.png')}/>
          <NamazTimingCard NamazName="ASAR" Time={prayerData.Asr} Image={require('../../assets/Images/AsarImage.png')}/>
          <NamazTimingCard NamazName="MAGRIB" Time={prayerData.Maghrib} Image={require('../../assets/Images/MagribImage.png')}/>
          <NamazTimingCard NamazName="ISHA" Time={prayerData.Isha} Image={require('../../assets/Images/IshaImage.png')}/>
      </View>
      </ScrollView>
    </View>
  )
}

export default PrayerTiming