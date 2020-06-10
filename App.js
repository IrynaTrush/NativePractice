import React, { useState } from 'react';
import { StyleSheet, View,  Alert} from 'react-native';
import { Navbar } from './src/components/Navrar/Navbar';
import { MainScreen } from './src/screens/MainScreen/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen/TodoScreen';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'robot-bold': require('./assets/fonts/Roboto-Regular.ttf')
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  if(!isReady) {
    return <AppLoading startAsync={loadApplication} 
    onFinish={() => setIsReady(true)}
    onError={err => console.log(err)}/>
  }

  const addTodo = title => {
   setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title,
    }])
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
      'Remove Element',
      `Are you sure, that you want to delete the element ${todo.title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'OK', onPress: () => {
          setTodoId(null);
          setTodos(prev => prev.filter(todo => todo.id !== id))
        } }
      ],
      { cancelable: false }
    );
    
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  let content = (<MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} 
  openTodo={(id) => {
    setTodoId(id);
  }}
  />);

  if(todoId) {
    const selectedTodo = todos.find( todo => todo.id === todoId)
    content = <TodoScreen onRemove={removeTodo} goBack={() => setTodoId(null)} 
    onSave={updateTodo}
    todo={selectedTodo}/>
  }
  return (
    <View >
      <Navbar title="Todo App"/>
      <View style={styles.container}>
       
      {content}
      {/* <View>
        { 
            todos.map(todo => {
            return <Todo todo={todo} key={todo.id}/>;
            })
        }
      </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
