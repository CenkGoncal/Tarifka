import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryItem = ({ item,navigation }) => {
    
    const handlePress = (category) => {
        navigation.navigate('MealPage', {Category : category});
    }
    
    return (
        <TouchableOpacity onPress={()=> handlePress(item.strCategory) }>
            <View style={styles.container}>
                <Image style={styles.images} source={{ uri: item.strCategoryThumb }}></Image>
                <Text style={styles.text}>{item.strCategory}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        borderTopStartRadius: 40,
        borderBottomStartRadius: 40,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        alignItems: "center"
    },
    images: {
        width: 75,
        height: 75,
        resizeMode: "contain"
    },
    text: {
        fontSize: 20,
        color: "black",
        marginLeft: 10
    }
})

export default CategoryItem;