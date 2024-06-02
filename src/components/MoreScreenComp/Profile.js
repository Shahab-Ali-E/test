import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CustomView } from '../StyleComponent/StyledComponent'

const Profile = () => {
  return (
    <CustomView bg='#dfd2f2' padding='0px'>
        <View style={styles.topSection}>
            <View style={styles.propicArea}>
                {/* <Image source={profile_picture} style={styles.propic} /> */}
            </View>
            <Text style={styles.name}>Shahab Ali</Text>
        </View>
    </CustomView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    topSection: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    propicArea: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#FFBB3B'
    },
    propic: {
        width: '100%',
        height: '100%'
      },
    name: {
        marginTop: 10,
        color: 'black',
        fontSize: 25,
    },
})

export default Profile

