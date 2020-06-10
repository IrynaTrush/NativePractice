import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions} from 'react-native';
import { AddTodo } from '../../components/AddTodo.js/AddTodo';
import { Todo } from '../../components/Todo/Todo';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo })=> {
    const [deviceWidth, setDeviceWidth] = useState( Dimensions.get('window').width );

    useEffect(() => {
        const update = () => {
          const width = Dimensions.get('window').width - 15;
          setDeviceWidth(width);
        }
        Dimensions.addEventListener('change', update)
        return () => {
            Dimensions.removeEventListener('change', update)

        }
    })

    let content = (
        <View style={{width: Dimensions.get('window').width}}>
            <FlatList 
    keyExtractor={item => item.id}
    data={todos}
    renderItem={({item}) => <Todo todo={item} 
    onRemove={removeTodo}
    onOpen={openTodo}/>}
    />
        </View>
    )

    if (todos.length === 0) { 
        console.log('asdqd');
        content = ( <View style={styles.imgWrap}>
           <Image
           style={{width: '100%', height: '100%'}}
             source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
             }}
        />
        </View>)
    }
    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        backgroundColor: '#000'
    }
})