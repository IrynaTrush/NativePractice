import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
      if(value.trim()) {
        onSubmit('Test Todo');
        setValue('');
      } else {
        Alert.alert("The name of a deal can't be empty")
      }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
            onChangeText={text => setValue(text)}
            value={value}
            placeholder="Enter a name of a deal"
            />
            <Button title="Add" onPress={pressHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '80%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})