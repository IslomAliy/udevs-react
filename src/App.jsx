import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import { useState } from 'react';
import SearchPanel from './components/SearchPanel'
import Filter from './components/Filter';
import TodoAddForm from './components/TodoAddForm'

let maxId = 100;

const createTodoItem = (label) => {
  return {
    label,
    important: false,
    done: false,
    id: maxId++
  }
}

const initialTodo = [
  createTodoItem('Drink Coffee'),
  createTodoItem('Make Awesome App'),
  createTodoItem('Have a lunch!')
]

function App() {
  const [todos, setTodos] = useState(initialTodo)

  function addTodo(label) {
    const newTodo = createTodoItem(label);
    setTodos([...todos, newTodo])
  }

  function onToggleDone(todoId) {
    const toggleTodo = todos.find((item) => item.id === todoId);
    console.log(todoId)
    toggleTodo.done = !toggleTodo.done;
    const newTodos = todos.filter((item) => item.id !== todoId);
    setTodos([...newTodos, toggleTodo])
  }

  return (
    <div className="App">
      <AppHeader />
      <div className="panels">
        <SearchPanel />
        <Filter />
      </div>
      <TodoList todos={todos} onToggleDone={onToggleDone}/>
      <TodoAddForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
