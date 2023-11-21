import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        width:'auto',
        height:64,
        backgroundColor:'#FF9B3F',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:12,
        borderRadius:15
    },
    Title: {
        fontSize:25,
        fontWeight:'bold',
        color:'#FFFFFF'
    },
    Icon: {
        color:'#ffffff',
        alignSelf:"center"
    }
});

export default styles;
