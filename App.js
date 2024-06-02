import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';

import Entry from './Entry';
import { useEffect, useState } from 'react';
//expo location
import * as Location  from 'expo-location';
//async storage
import AsyncStorage from '@react-native-async-storage/async-storage'
//import Axios
import axios from 'axios';
//loading
import LoadingScreen from './src/components/LoadingScreenComp/LoadingScreen';
//functions
import getCurrentLocation from './src/components/Functions/getCurrentLocation';
//redux
import {Provider} from 'react-redux'
import store from './src/components/Redux/Store';



export default function App() {

  const [loading , setLoading] = useState(true);

  // useEffect(()=>{
  //   const getLoc = async()=>{
  //     await AsyncStorage.clear()
  //     //await getCurrentLocation();  
  // }
  //  getLoc()
  // },[])

  useEffect(()=>{
    setLoading(false)
  },[])
 
  if(loading==true){
    return(
    <LoadingScreen visible={loading}/>
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>   
      <Provider store={store}>
        <Entry/>
       </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


