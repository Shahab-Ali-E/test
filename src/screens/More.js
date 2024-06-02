import {
  StyleSheet,
  ScrollView,
} from "react-native";
import React from 'react'
import Profile from "../components/MoreScreenComp/Profile";
import { CustomView } from "../components/StyleComponent/StyledComponent";
import CustomMorePageButton from "../components/MoreScreenComp/CustomMorePageButton";


const More = ({navigation}) => {
  return (
    <ScrollView style={{flex:1 , backgroundColor:'white'}}>
        <Profile />
        <CustomView flexDirection='row' justifyContent='center' gap='60'>
            <CustomMorePageButton iconImage={require('../../assets/Images/setting.png')} iconText="Settings" navigator={navigation} toNaviagte='Settings'/>
            <CustomMorePageButton iconImage={require('../../assets/Images/smartwatch.png')} iconText="Tasbeeh" navigator={navigation} toNaviagte='Tasbeeh'/>
        </CustomView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  membership: {
    color: '#FFBB3B',
    fontSize: 18,
  },
  buttonList: {
    marginTop: 20,
  },
  buttonSection: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,

  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconArea: {
    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  buttonName: {
    width: 300,
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
  },
  sp: {
    width: 400,
    marginTop: 10,
    height: 1,
    backgroundColor: '#FFFFFF45'
  }
});


export default More