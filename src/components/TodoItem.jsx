import {useDispatch} from 'react-redux'
import {removeTodo, toggleTodo} from '../store/todoSlice'

function TodoItem({id, text, completed}) {
  const dispatch = useDispatch()

  return (
    <li key={id}>
      <input type="checkbox" checked={completed ? 'checked' : ''} onChange={() => dispatch(toggleTodo({id}))}/>
      <span>{text}</span>
      <span style={{color: 'red'}} className="delete" onClick={() => dispatch(removeTodo({id}))}>X</span>
    </li>
  );
}

export default TodoItem;
