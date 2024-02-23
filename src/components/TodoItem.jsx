function TodoItem({id, text, completed, setChecked, removeTodo}) {

  return (
    <li key={id}>
      <input type="checkbox" checked={completed ? 'checked' : ''} onChange={() => setChecked(id)}/>
      <span>{text}</span>
      <span style={{color: 'red'}} className="delete" onClick={() => removeTodo(id)}>X</span>
    </li>
  );
}

export default TodoItem;
