import React, { useState } from 'react';
import { StyleSheet, View , Text, Button} from 'react-native';
import { Todo } from '../../components/Todo/Todo';
import { EditModal } from '../../components/EditModal/EditModal.js';

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
    const [modal, setModal] = useState(false);

    const SaveHandler = title => {
        onSave(todo.id, title);
        setModal(false);
    }
    return (
        <View>
            <EditModal visible={modal} 
            value={todo.title}
            onCancel={() => setModal(false)}
            onSave={SaveHandler}
            />
           <View style={styles.edit}>
           <Text>
               {todo.title}
            </Text>
            <Button title="edit" onPress={() => setModal(true)}/>
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