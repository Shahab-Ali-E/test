import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Components
import HomeCard from '../components/HomeScreenComp/HomeCard';
import Clock from '../components/HomeScreenComp/Clock';
import MyAddress from '../components/MyAddress/MyAddress';
import filterAPIData from '../components/Functions/filterAPIDataPerDayPray';
import { getCurrentAndNextPrayer } from '../components/Functions/getCurrentAndNextPrayer';
import LoadingScreen from '../components/LoadingScreenComp/LoadingScreen';

const HomeScreen = () => {
  const data = useSelector(state => state.Reducer);
  const [currentPrayer, setCurrentPrayer] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      try {
        const parsedData = JSON.parse(data[0]);
        const filterData = filterAPIData(parsedData.data);
        console.log(filterData)
        const { currentPrayer, nextPrayer } = getCurrentAndNextPrayer(filterData);
        setCurrentPrayer(currentPrayer);
        setNextPrayer(nextPrayer);
        setLoading(false);
      } catch (error) {
        console.error("Error parsing data:", error);
        setLoading(false);
      }
    } else {
      console.log("No data found in Redux state.");
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return <LoadingScreen visible={true} />;
  }

  if (!currentPrayer || !nextPrayer) {
    return <LoadingScreen visible={true} />;
  }

  return (
    <View style={{ flex: 1, marginBottom: 80 }}>
      <View style={{ flex: 0.4 }}>
        <MyAddress />
      </View>
      <View style={{ flex: 1 }}>
        <Clock />
      </View>
      <View style={{ flex: 0.8 }}>
        <HomeCard
          background="#e2daf2"
          NamazName={currentPrayer.name}
          Time={currentPrayer.time}
          Title="Current Prayer Time"
        />
        <HomeCard
          background="#fff"
          NamazName={nextPrayer.name}
          Time={nextPrayer.time}
          Title="Next Prayer Time"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
