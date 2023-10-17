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
        marginBottom:'5%',
        justifyContent:'space-between'
    },
    HeaderLaranja: {
        backgroundColor:'#FF9B3F',
        width:'auto',
        height:'20%'
    },
    MenuTop: {
        marginLeft:'5%',
        marginRight:'5%',
        padding:15,
        borderRadius:32,
        backgroundColor:'#FFFFFF',
        gap:26
    },
    Menu: {
        marginLeft:'5%',
        marginRight:'5%',
        padding:15,
        borderRadius:32,
        backgroundColor:'#FFFFFF',
        gap:26
    },
    Title: {
        alignSelf:'center',
        fontSize:24,
        fontWeight:'bold',
        color:'#DB5807'
    }
});

export default styles;
