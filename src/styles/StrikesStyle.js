import { StyleSheet } from "react-native";


export default StrikesStyle = StyleSheet.create({
    Container:{
        flex:1,
        padding:10,
        marginBottom:'20%'
    },
    card:{
        padding:25, 
        alignItems:'center',
        justifyContent:'center',
        gap:5,
        flex:1.2,
        backgroundColor:'white',
        shadowColor:'rgba(51, 101, 138,0.7)',
        shadowOffset:{
            height:0,
        },
        marginBottom:20,
        elevation:5,
        borderRadius:20,
    },
    floatingHeading:{
        alignSelf:'center',
        color:'#33658A',
        fontWeight:'bold',
        fontSize:24,
    },
    chart:{
        padding:10,
        gap:15,
        backgroundColor:'white',
        shadowColor:'rgba(51, 101, 138,0.7)',
        shadowOffset:{
            height:0,
        },
        elevation:5,
        borderRadius:20,
        flex:2,
    }
})