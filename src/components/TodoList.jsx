import TodoItem from './TodoItem'

function TodoList({todos, setChecked, removeTodo}) {

  return (
    <ul>
      {todos.map(todo=><TodoItem key={todo.id} {...todo} setChecked={setChecked} removeTodo={removeTodo}/>)}
    </ul>
  );
}

export default TodoList;
