import React from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import { AppText } from '../appText/appText.js';

export const AppButton = ({children, onPress, color ='blue' }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return (
        <Wrapper onPress={onPress}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppText>{children}</AppText>
            </View>
        </Wrapper>
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