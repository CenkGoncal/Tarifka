import React, { useState } from 'react';
import { View, Text, FlatList,TouchableOpacity } from 'react-native';
import styles from "./MealContentStyle";

const MealContent = ({ content }) => {

    const [ isExpand, setExpand] = useState(true);
    
    const RenderMealContentItem = ({item}) => {
      return (  <Text style={styles.item}>{item}</Text>)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => setExpand(!isExpand)} >
                <Text style={styles.caption(20)}>Contents({ isExpand ? "+" : "-" })</Text>
            </TouchableOpacity>
            {
                isExpand && 
                <FlatList
                    data={content}
                    keyExtractor={(item) => item}
                    renderItem={RenderMealContentItem}
                />
            }
        </View>
    )
}

export default MealContent;