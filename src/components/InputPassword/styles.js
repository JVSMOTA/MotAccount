import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        width:'auto'
    },
    Title: {
        fontSize:16,
        fontWeight:'bold',
        color:'#DB5807'
    },
    Input: {
        marginTop:5,
        borderRadius:5,
        borderColor:'#FFE6CF',
        backgroundColor:'#FFF1E3',
        color:'#FF9B3F',
        borderWidth:1,
        paddingLeft:'5%',
        paddingRight:'5%',
        paddingTop:'4%',
        paddingBottom:'4%',
        fontSize:16
    },
    ErrorMessage: {
        color:"red"
    },
    TitleAndError: {
        paddingLeft:'5%',
        paddingRight:'5%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});

export default styles;
