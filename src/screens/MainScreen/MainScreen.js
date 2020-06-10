import React from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import { AddTodo } from '../../components/AddTodo.js/AddTodo';
import { Todo } from '../../components/Todo/Todo';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo, Image })=> {
    let content = (<FlatList 
    keyExtractor={item => item.id}
    data={todos}
    renderItem={({item}) => <Todo todo={item} 
    onRemove={removeTodo}
    onOpen={openTodo}/>}
    />)

    if (todos.length === 0) { 
        content = ( <View style={styles.imgWrap}>
           
           <Text>no items yet</Text>
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
        height: 300
    }
})