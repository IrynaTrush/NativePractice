import React, { useState } from 'react';
import { StyleSheet, View , Text, Button, Dimensions} from 'react-native';
import { Todo } from '../../components/Todo/Todo';
import { EditModal } from '../../components/EditModal/EditModal.js';
import { AppText } from '../../ui/appText/appText.js';
import { AppButton } from '../../ui/appButton/AppButton';
import {FontAwesome, AntDesign} from '@expo/vector-icons';

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
            <AppButton onPress={() => setModal(true)}>
                <FontAwesome name="edit" color="#fff" size={20}/>
            </AppButton>
           </View>
            <View style={styles.buttons}>
                <View style={styles.button}><AppButton onPress={goBack}><AntDesign name='back' size={20} color="#fff" /></AppButton></View>
                <View style={styles.button}><AppButton color="#ff0000" onPress={() => onRemove(todo.id)} ><FontAwesome name="remove" size={20} color="#fff"/></AppButton></View>

              
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
        width: Dimensions.get('window').width / 3,
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