import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor:'#FFF1E3',
        justifyContent:'flex-start',
        gap:26
    },
    PageContent: {
        flex:1,
        marginTop:'-35%',
        gap:15
    },
    HeaderLaranja: {
        backgroundColor:'#FF9B3F',
        width:'auto',
        height:'20%'
    },
    Menu: {
        marginHorizontal:'5%',
        paddingHorizontal:15,
        paddingTop:5,
        borderTopLeftRadius:32,
        borderTopRightRadius:32,
        backgroundColor:'#FFFFFF'
    },
    MenuTop: {
        marginHorizontal:'5%',
        padding:15,
        borderRadius:32,
        backgroundColor:'#FFFFFF',
        gap:26
    },
    Title: {
        fontSize:24,
        fontWeight:'bold',
        color:'#DB5807'
    },
    SubTitle: {
        color: '#DB5807',
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default styles;
