import {StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#f2f2f2",

    },
    captionGrup:{
        borderBottomWidth:1,
        borderColor:"gray",
        paddingBottom:10,
        paddingTop:10,
        paddingLeft:5
    },
    caption : (size) => {
        return {
            color: "#a52a2a",
            fontSize:size,
            fontWeight:"bold"
        }
    },
    image:{
        width:Dimensions.get("window").width,
        height :Dimensions.get("window").height / 3
    },
    description:{
        padding:5,
        fontSize:15
    },
    buttonContainer: {
        backgroundColor:"red", 
        margin:5, 
        padding:10, 
        borderRadius:10
    },
    button:{
       flex:1
    },
    buttonText:{
        color:"white",
        fontSize:15,
        textAlign:"center"
    },
    
})