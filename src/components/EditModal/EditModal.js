import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native';

export const EditModal = ({visible, onCancel, value , onSave}) => {
    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if( title.trim().length < 3) {
            Alert.alert('Error', `Minimal length of the name is 3 symbols. Now is ${title.trim().length < 3}`)
        } else {
          onSave(title)
        }
    }
    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input} placeholder="enter name" autoCapitalize="none" 
                value={title}
                onChangeText={setTitle}
                maxLength={28}
                autoCorrect={false}/>
                <View style={styles.buttons}>
                  <Button  title="cancel" onPress={onCancel} color="red"/>
                </View>
                <View style={styles.buttons}>
                  <Button title="save" onPress={saveHandler}/>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    input: {
        padding: 10,
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        width: '80%',
    },
    buttons: {
      marginTop: 10,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }
})