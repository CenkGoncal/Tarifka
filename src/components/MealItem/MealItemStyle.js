import { StyleSheet, Dimensions } from 'react-native';

const widthMealItem = Dimensions.get('window').width -20;

export default StyleSheet.create({
    container:{
        margin:10,
        position:"relative",
    },
    image: {
        width:  widthMealItem,
        height : Dimensions.get('window').height / 3,
        borderRadius:20, 
    },
    text : {
        color:"white",
        backgroundColor:"black",
        opacity:0.8,
        position:"absolute",
        bottom:0,
        width: widthMealItem,
        height:50,
        fontSize:20,
        padding:10,
    }
})