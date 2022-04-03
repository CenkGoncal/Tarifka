import React, {  } from 'react';
import { View, ScrollView,  Text,  Image, ActivityIndicator,FlatList } from 'react-native';
import MealContent from '../../components/MealContent';

import useFetch from '../../customHook/useFetch';
import LinkButton from '../../utils/LinkButton/LinkButton';
import styles from "./MealDetailStyles";

const MealDetail = ({ route }) => {

    const arrangeContent = () => {
        data.meals[0].contents = [];
        for(var i = 1; i < 21; i++)
        {
            let content = eval('data.meals[0].strIngredient' + i)+ " " +eval('data.meals[0].strMeasure' + i);
            if(content.trim() !== "")
            {
                console.log(content);
                data.meals[0].contents.push(content);
            }    
        }
    }

    const { idMeal } = route.params;
    const { data, error, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  

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

    if(data != null)
    {
        arrangeContent();
    }
      
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />
            <View style={styles.captionGrup}>
                <Text style={styles.caption(30)}>{data.meals[0].strMeal}   </Text>
                <Text style={styles.caption(20)}>{data.meals[0].strArea}</Text>
            </View>
            <Text style={styles.description}>{data.meals[0].strInstructions}</Text>

            <MealContent content={data.meals[0].contents} />

            <View style={styles.buttonContainer}>
                <LinkButton children={"Watch on Youtube"} url={data.meals[0].strYoutube} styles={styles} />
            </View>
        </ScrollView>
    )
}

export default MealDetail;