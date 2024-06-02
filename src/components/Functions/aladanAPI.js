import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getCurrentLocation from "./getCurrentLocation";

//functions
import getTodayDate from '../Functions/getTodayDate';
import monthNameToNumber from './monthNameToNumber';


export const aladanAPI = async (method) => {

  //get the mont and year
  let [,month ,year] = await getTodayDate().split(" ");
  month = monthNameToNumber(month);

  coords = await getCurrentLocation();
  if (!coords) {
      alert("Could not get current location");
      return null;
  }

  try {
    const result = await axios.get('https://api.aladhan.com/v1/calendar', {
      params: {
        year : year,
        month:month,
        latitude: `${coords.coords.latitude}`,
        longitude: `${coords.coords.longitude}`,
        method: 1,
        school:method 
      }
    });

    return result;
  } catch (error) {
    alert(error);
    return null;
  }
};
