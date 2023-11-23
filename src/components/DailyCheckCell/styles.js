import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flexDirection:"row",
        padding:'3%',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#DB5605',
        gap:5,
        marginBottom:10
    },
    ContainerDay: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between",
        paddingHorizontal:"5%"   
    },
    Celula: {
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:'#FFE6CF',
        color:'#DB5605',
        paddingHorizontal:'2%'
    },
    Razao: {
        color:'#DB5605',
        fontSize:20
    },
    Valor: {
        color:'#DB5605',
        fontSize:20
    },
    Dia: {
        color:'#DB5605',
        fontWeight: "bold"
    },
    Data: {
        color:'#DB5605',
        fontWeight: "bold"
    },
    CheckBox: {
        justifyContent: "center",
        alignItems: "center",
        width: 25,
        borderWidth: 3,
        borderRadius: 3,
        borderColor: "#FF9B3F"
    }    
});

export default styles;
