import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        width:'90%',
        backgroundColor:'#FFFFFF',
        padding:15,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:32,
        gap:26
    },
    ContainerButton: {
        width:'auto',
        height:46,
        backgroundColor:'#DB5807',
        alignItems:'center',
        padding:12,
        borderRadius:23
    },
    ContainerToLoginAdm: {
        width:'auto'
    },
    Title: {
        fontSize:24,
        fontWeight:'bold',
        color:'#DB5807',
        alignSelf:'center', /*oi amor eu te amo mas queria saber pq esse botao n faz nada?*/
    },
    TitleButton: {
        fontSize:16,
        fontWeight:'bold',
        color:'#FFFFFF'
    },
    TitleToLoginAdm: {
        alignSelf:'center',
        fontSize:18,
        fontWeight:'bold',
        color:'#DB5807',
        textDecorationLine:"underline"
    }
});

export default styles;
