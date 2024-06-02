import { View, Text } from 'react-native'
import React,{useEffect} from 'react'

//Navigation container
import { NavigationContainer } from '@react-navigation/native';

//navigator
import BottomNavigation from './src/Navigation/BottomNavigation'

//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//redux
import {useDispatch} from 'react-redux'
import { switchHanfiMode, switchShafiMode } from './src/components/Redux/Actions';

const Entry = () => {
  const dispatch = useDispatch ();

  useEffect(() => {
    const initializeMode = async () => {
      try {
        const savedMode = await AsyncStorage.getItem('CheckBoxValue');
        if (savedMode === 'Hanfi') {
          dispatch(switchHanfiMode(1));
        } else {
          dispatch(switchShafiMode(0));
        }
      } catch (e) {
        alert(e);
      }
    };

    initializeMode();
  }, [dispatch]);


  return (
    <NavigationContainer>
      <BottomNavigation/>
    </NavigationContainer>
  )
}

export default Entry