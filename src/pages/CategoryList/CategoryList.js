import * as React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import CategoryItem from '../../components/CategoryItem';
import useFetch from '../../customHook/useFetch';
import styles from "./CategoryListStyle";


const CategoryList = ({ navigation }) => {

    const { data, error, loading } = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");

    const onRenderItem = ({ item }) => {
        return (
            <CategoryItem item={item} navigation={navigation} />
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

    return (
        <View style={styles.container}>
            <FlatList data={data.categories}
                keyExtractor={(item) => item.idCategory}
                renderItem={onRenderItem} />
        </View>)
}

export default CategoryList;