import * as React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

import MealItem from '../../components/MealItem';
import useFetch from '../../customHook/useFetch';
import styles from "./MealStyle";

const MealList = ({ navigation, route }) => {

    const { Category } = route.params;
    const { data, error, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`);

    const onRenderItem = ({ item }) => {
   
        return (
            <MealItem item={item} navigation={navigation} />
        )
    }

    if (loading) {
        return (
            <ActivityIndicator size={20} />
        )
    }

    if (error) {
        return (
            <Text>{error}</Text>
        )
    }
    console.log(data.meals);

    return (
        <View style={styles.container}>
            <FlatList data={data.meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={onRenderItem}
            />
        </View>
    )
}

export default MealList;