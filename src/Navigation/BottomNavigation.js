import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

//screens
import HomeScreen from '../screens/HomeScreen';
import QiblaDirection from '../screens/QiblaDirection';
import PrayerTiming from '../screens/PrayerTiming';
import PrayerTimingMonthly from '../screens/PrayerTimingMonthly';

//Icons
import {
    MaterialCommunityIcons,
} from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './StackNavigation';



const BottomNavigation = () => {
    const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
        initialRouteName='HomeScreen'
        keyboardHidesNavigationBar="true"
        activeColor="#6C1CF0"
        shifting={true}
        labeled={false}
        barStyle={styles.tabBarStyle}
        screenOptions={{
            headerTitleStyle:{
                color:'#fff',
                fontSize:24,
                fontWeight:'700',
            },
            headerTitleAlign:'center',
            tabBarShowLabel:false,
        }}
    >
        <Tab.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{
                tabBarLabel:"Home",
                headerTitle: 'Home Screen',
                tabBarIcon:({focused})=>(
                    <View style={styles.TabBarView}>
                         {
                        focused 
                        ?
                        <MaterialCommunityIcons name="home-circle" size={27} color='#6C1CF0'/>
                        :
                        <MaterialCommunityIcons name="home-circle-outline" size={27} color='#9B9B9B'/>

                    }
                    </View>
                ),
            }}
        />
      <Tab.Screen
        options={{
            tabBarLabel:"Qibla",
            tabBarIcon:({focused})=>(
                <View style={styles.TabBarView}>
                    {
                        focused 
                        ?
                        <MaterialCommunityIcons name="compass" size={26} color='#6C1CF0'/>
                        :
                        <MaterialCommunityIcons name="compass-outline" size={26} color='#9B9B9B'/>

                    }
                </View>
            ),
        }} 
        name="QiblaDirection" 
        component={QiblaDirection} 
      />
      <Tab.Screen 
        options={{
            tabBarLabel:"Prayer Timing",
            tabBarIcon:({focused})=>(
                <View style={styles.TabBarView}>
                    {
                        focused 
                        ?
                        <MaterialCommunityIcons name="clock-time-ten" size={24} color='#6C1CF0'/>
                        :
                        <MaterialCommunityIcons name="clock-time-ten-outline" size={24} color='#9B9B9B'/>

                    }
                </View>
            ),
        }} 
        name="PrayerTiming" 
        component={PrayerTiming} 
      />
      <Tab.Screen 
        options={{
            tabBarLabel:"Monthly",
            tabBarIcon:({focused})=>(
                <View style={styles.TabBarView}>
                    {
                        focused 
                        ?
                        <MaterialCommunityIcons name="calendar-clock" size={24} color='#6C1CF0'/>
                        :
                        <MaterialCommunityIcons name="calendar-clock-outline" size={24} color='#9B9B9B'/>

                    }
                </View>
            ),
        }} 
        name="PrayerTimingMonthly" 
        component={PrayerTimingMonthly} 
      />
      <Tab.Screen
        options={{
            tabBarLabel:"Monthly Timing",
            tabBarIcon:({focused})=>(
                <View style={styles.TabBarView}>
                    {
                        focused 
                        ?
                        <MaterialCommunityIcons name="dots-horizontal-circle" size={25} color='#6C1CF0'/>
                        :
                        <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={25} color='#9B9B9B'/>

                    }
                </View>
            ),
        }} 
        name="More" 
        component={StackNavigation} 
      />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarStyle:{
        position:'absolute',
        backgroundColor:'#ede8f4',
        bottom:7,
        height:70,
        borderRadius:10,
            overflow:'hidden',
            left:15,
            right:15,
            elevation:4,
        
    },
    headerShadow:{
        shadowColor:'black',
        shadowOffset:{
            height:20,
            width:0,
        },
        shadowOpacity:0.8,
        shadowRadius:2.5,
        elevation:12,
    },
    TabBarView:{
        justifyContent:'center',
        alignItems:'center',
    },
    Text:{
        fontSize:14,
    }
})
export default BottomNavigation