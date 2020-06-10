import React from 'react';
import { StyleSheet, View , Text, Button} from 'react-native';
import { Todo } from '../../components/Todo/Todo';

export const TodoScreen = ({goBack, todo, onRemove}) => {
    return (
        <View>
           <View style={styles.edit}>
           <Text>
               {todo.title}
            </Text>
            <Button title="edit" onPress={() => console.log('sth')}/>
           </View>
            <View style={styles.buttons}>
                <View style={styles.button}><Button title="Back" onPress={goBack} /></View>
                <View style={styles.button}><Button title="Delete" color="#ff0000" onPress={() => onRemove(todo.id)} /></View>

              
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
    },
    edit: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-around',
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: 'blue',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2},
        backgroundColor: '#fff',
        elevation: 8,
    }
})