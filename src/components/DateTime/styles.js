import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        width:'auto',
        alignItems:'center',
        padding:12,
        borderTopWidth:1,
        borderTopColor:'#DB5807',
        borderBottomWidth:1,
        borderBottomColor:'#DB5807'
    },

    CurrentDayOfWeek: {
        fontWeight:'bold',
        fontSize:20,
        color:'#B84A07'
    },
    CurrentDate: {
        fontWeight:'bold',
        fontSize:25,
        color:'#B84A07'
    }
});

export default styles;
