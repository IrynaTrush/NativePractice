import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { AppText } from '../../ui/appText/appText';

export const Navbar = ({title}) => {
    return (
        <View style={{...styles.navbar, ...Platform.select({
            ios: styles.navbarIos,
            android: styles.navbarAndroid,
        })}}>
            <AppText style={styles.text}>{title}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 10, 
    },
    navbarAndroid: {
        backgroundColor: 'lightblue',
    },
    navbarIos: {
        borderBottomColor: 'blue',
        borderBottomWidth: 1
    }, 
    text: {
        color: 'white',
    }
})