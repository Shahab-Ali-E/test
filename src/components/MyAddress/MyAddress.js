import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

// functions
import getCurrentLocation from '../Functions/getCurrentLocation';
import getMyAddress from '../Functions/getMyAddress';

//comp
import LoadingScreen from '../LoadingScreenComp/LoadingScreen';
import { CustomText } from '../StyleComponent/StyledComponent';

//icons
import { FontAwesome6 } from '@expo/vector-icons';
import getTodayDate,{getTodayDay} from '../Functions/getTodayDate';

const MyAddress = () => {
    const [address, setAddress] = useState(null);
    const [date,setDate] = useState(null);

    useEffect(() => {
        const getCoords = async () => {
            const result = await getCurrentLocation();
            if (result) {
                const address = await getMyAddress(result.coords.latitude , result.coords.longitude);
                setAddress(address.data.address);
                setDate(getTodayDate());
            }
        }
        getCoords();
    }, []);
    
    if(address==null && date == null){
        return <LoadingScreen visible={true}/>;
    }

  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center' }}>
        <View style={{flexDirection:'row', alignItems:'center',gap:4}}>
            <FontAwesome6 name="location-dot" size={24} color="#7116f1" />
            <CustomText color = '#7116f1' fontWeight='bold' fontSize='32'>{address.city}</CustomText>
        </View>
        <View style={{flexDirection:'row'}}>
            <CustomText color = '#7116f1' fontWeight='bold' fontSize='15'>{getTodayDay()}</CustomText>
            <CustomText color = '#7116f1' fontWeight='bold' fontSize='15'>, {date}</CustomText>
        </View>
    </View>
  )
}

export default MyAddress