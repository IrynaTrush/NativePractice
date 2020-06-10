import React from 'react';
import { StyleSheet, View , Text, Button} from 'react-native';
import { Todo } from '../../components/Todo/Todo';

export const TodoScreen = ({goBack, todo}) => {
    return (
        <View>
            <Text>
               {todo.title}
            </Text>
            <View style={styles.buttons}>
                <View style={styles.button}><Button title="Back" onPress={goBack} /></View>
                <View style={styles.button}><Button title="Delete" color="#ff0000" onPress={() => console.log('aaa')} /></View>

              
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
        width: '40%',
    }
})