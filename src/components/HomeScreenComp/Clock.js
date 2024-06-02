import React from 'react';
import { StyleSheet, View } from 'react-native';
import AnalogClock from 'react-native-clock-analog';


const Clock=()=> {

  return (
    <View style={styles.container}>
      <AnalogClock
          colorClock="#eacff7"
          colorNumber="#7116f1"
          colorCenter="#7116f1"
          colorHour="transparent"
          colorMinutes="transparent"
          colorSeconds="#7116f1"
          autostart={true}
          size={270}
          showSeconds
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default Clock;