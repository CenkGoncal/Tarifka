import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./MealItemStyle";

const MealItem = ({ item, navigation }) => {

    const onDetailPage = (idMeal) => {
        navigation.navigate("MealDetail",{idMeal: idMeal});
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>onDetailPage(item.idMeal)}>
                <Image style={styles.image} source={{ uri: item.strMealThumb }} />
                <Text style={styles.text}>{item.strMeal}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MealItem;