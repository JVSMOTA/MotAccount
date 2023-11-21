import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        padding:'3%',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#DB5605',
        gap:5
    },
    Celula: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:'#FFE6CF',
        color:'#DB5605',
        paddingLeft:'5%',
        paddingRight:'5%'
    },
    Tipo: {
        color:'#DB5605',
        fontSize:20
    },
    Valor: {
        color:'#DB5605',
        fontSize:20
    }
});

export default styles;
