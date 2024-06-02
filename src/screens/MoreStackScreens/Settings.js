import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import RadioButton from 'radio-buttons-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { switchHanfiMode, switchShafiMode } from '../../components/Redux/Actions';

const Settings = () => {
  const dispatcher = useDispatch();
  const [CheckBoxValue, setCheckBoxValue] = useState(null);

  const data = [
    { label: 'Shafi' },
    { label: 'Hanfi' }
  ];

  useEffect(() => {
    const loadCheckBoxValue = async () => {
      try {
        const savedValue = await AsyncStorage.getItem('CheckBoxValue');
        if (savedValue !== null) {
          setCheckBoxValue(savedValue);
          if (savedValue === 'Shafi') {
            dispatcher(switchShafiMode(0));
          } else {
            dispatcher(switchHanfiMode(1));
          }
        } else {
          setCheckBoxValue('Shafi'); // Default value
          dispatcher(switchShafiMode(0));
        }
      } catch (e) {
        console.error(e);
      }
    };

    loadCheckBoxValue();
  }, [dispatcher]);

  const DispatcherHandler = async (e) => {
    setCheckBoxValue(e.label);
    try {
      await AsyncStorage.setItem('CheckBoxValue', e.label);
    } catch (e) {
      console.error(e);
    }
    if (e.label === 'Shafi') {
      dispatcher(switchShafiMode(0));
    } else {
      dispatcher(switchHanfiMode(1));
    }
  };

  return (
    <View>
      <RadioButton
        data={data}
        selectedBtn={DispatcherHandler}
        initial={data.findIndex(item => item.label === CheckBoxValue) + 1}
        textColor="#7116f1"
        boxStyle={{
          borderRadius: 50,
          borderWidth: 2,
          backgroundColor: '#e8e1f2'
        }}
        textStyle={{
          fontSize: 17
        }}
        activeColor="#7116f1"
      />
    </View>
  );
};

export default Settings;
