import React, { useState } from 'react';
import { StyleSheet, View,  FlatList} from 'react-native';
import { Navbar } from './src/components/Navrar/Navbar';
import { MainScreen } from './src/screens/MainScreen/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen/TodoScreen';


export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
   setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title,
    }])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  let content = (<MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} />);

  if(todoId) {
    content = <TodoScreen />
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
