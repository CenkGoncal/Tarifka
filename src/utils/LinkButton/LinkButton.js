import React from 'react';
import {  TouchableOpacity, Text, Linking  } from 'react-native';

const LinkButton = ({styles,children,url}) => {

    const handlePress = () => {
        Linking.openURL(url);
    }
  
    return (
        <TouchableOpacity styles={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    )
}

export default LinkButton