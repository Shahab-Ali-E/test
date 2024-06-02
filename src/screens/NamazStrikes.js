import React, { useContext, useEffect, useState } from 'react'
import { Text, View , Alert} from 'react-native'

//components
import FloatingCircle from '../components/FloatingCircle'
import TopTabs from '../navigations/TopTabs'

//style
import StrikesStyle from '../styles/StrikesStyle'

//local storage import
import AsyncStorage from '@react-native-async-storage/async-storage'

//context
import {StreakContext} from '../context/NamazStrike'

const NamazStrikes = ()=>{
  const streak = useContext(StreakContext);

  //states
  const [salahRecord , setSalahRecord] = useState([]);
  const [progress, setProgress] = useState(0);

  //useEffect for data fetching of salah record
  useEffect(()=>{
    const getData = async()=>{
      try {
       const data =  await AsyncStorage.getItem('salahRecord')
        data!=null ? setSalahRecord(JSON.parse(data)) : setSalahRecord([]);

        //if the salah record is empty then no streak will be calulated!
        // if(salahRecord.length!=0){
            
        // }
      } catch (e) {
        Alert.alert("Error Occured !",e)
      }
    }
    getData();
     
  },[streak.salahData]) 

  if(!salahRecord){
    return null;
    // return(
    //   <View style={{justifyContent:'center' ,alignItems:'center',flex:1}}>
    //     <Text style={{fontSize:20 , fontWeight:'bold'}}>You dont have record YET !!</Text>
    //   </View>
    // );
  }

  // Execute calculateStreakes whenever salahRecord changes which calculte the streakes
    useEffect(() => {
      calculateStreakes();
    }, [salahRecord]);
    
  const calculateStreakes = ()=>{
    let determineProgressValue = salahRecord.map(obj=>{
      let ObjectValues = Object.values(obj)[0]
      return ObjectValues.some(ele =>ele == null)
    })
    if (determineProgressValue){
      if(determineProgressValue.includes(true) == true){
        setProgress(0)  
      }else{
        setProgress((determineProgressValue.filter(ele=>ele == false)).length)
      }
  }
  }
  //console.log(salahRecord); 
  return (  
    <View style={StrikesStyle.Container}>
      <View style={StrikesStyle.card}>
        <Text style={StrikesStyle.floatingHeading}>
         Streaks
        </Text>
      {
        salahRecord!=null?  <FloatingCircle size={200}  progress={progress} />: null
      }
     
      </View>
      <View style={StrikesStyle.chart}>
        <Text style={StrikesStyle.floatingHeading}>Previous Record</Text>
        <TopTabs />
      </View>
    </View>
  );
}

export default NamazStrikes
