import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
//component
import TasbeehCard from '../../components/TasbeehCard'
import RipleButton  from '../../components/RipleButton'

//progress
 import * as Progress from 'react-native-progress';

 //icon
 import { AntDesign } from '@expo/vector-icons';

const Tasbeeh = () => {
  return (
    <View style={styles.container}>
    <TasbeehCard>
        <Text style={styles.text}>Alhamdulillah</Text>
        <Progress.Circle 
            size={175}
            unfilledColor='#cfc2e8'
            borderWidth={0}
            progress={0.1}
            thickness={30}
            showsText={true}
            style={styles.progress}
            color='#7116f1'
            formatText={() => (
            <View>
                <Text style={styles.counterText}>10</Text>
            </View>
        )}
        />
        <Text style={styles.totalCountText}>/33</Text>
    </TasbeehCard>
    <TasbeehCard>
        <View style={{flex:0.4, alignSelf:'flex-end'}}>
            <Pressable
                style={styles.reload}
                android_ripple={{ 
                    color: 'rgba(165, 119, 234,0.5)', 
                    borderless: false, 
                    radius: 28, 
                }}
            >
                    <AntDesign name="reload1" size={25} color="#ae85ea"/>
            </Pressable>
        </View>
        
        <View style={{flex:1}}>
            <RipleButton />
        </View>
    </TasbeehCard>
    <View style={{flex:0.2}}></View>
    </View>
  )
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        padding:10,
    },
    text:{
        flex:0.7,
        color:'#7116f1',
        fontSize:20,
        fontWeight:'bold',
    },
    progress: {
        flex:2,
    },
    counterText:{
        fontSize:30,
        fontWeight:'bold',
        color:'#7116f1'
    },
    totalCountText:{
        flex:0.5,
        color:'#ae85ea',
        textAlignVertical:'center',
        fontSize:30,
        fontWeight:'bold',
    },
    reload:{
        padding:15,
        backgroundColor:'white',
        borderRadius:30,
    }
})
export default Tasbeeh