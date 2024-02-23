import { useState } from 'react'
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if(text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])

      setText('')
    }
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(item=>item.id !== todoId))
  }

  const setChecked = (todoId) => {
    setTodos(todos.map(
      todo => {
        if(todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      }
    ))
  }

  return (
    <div className="App">
      <InputField text={text} setText={setText} addTodo={addTodo}/>
      <TodoList todos={todos} setChecked={setChecked} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
