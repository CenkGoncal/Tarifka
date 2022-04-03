import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{

    },
    caption : (size) => {
        return {
            color: "#a52a2a",
            fontSize:size,
            fontWeight:"bold",

        }
    },
    item:{
        fontSize:15,
        color:"black",
        padding:5,
        borderBottomWidth:1,
        borderColor:"lightgray",
    }
})