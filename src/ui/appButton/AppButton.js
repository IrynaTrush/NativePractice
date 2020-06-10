import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { AppText } from '../appText/appText.js';

export const AppButton = ({children, onPress, color ='blue' }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppText>{children}</AppText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      flexDirection: 'row',
     
      justifyContent: 'center',
    }
})