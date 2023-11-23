import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flexDirection:"column",
        borderRadius:5,
        borderWidth:1,
        borderColor:'#DB5605'
    },
    ContainerDay: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between",
        paddingHorizontal:"5%"   
    },
    Dia: {
        color:'#DB5605',
        fontWeight: "bold"
    },
    Data: {
        color:'#DB5605',
        fontWeight: "bold"
    }    
});

export default styles;
