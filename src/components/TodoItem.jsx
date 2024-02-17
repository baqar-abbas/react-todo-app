// TodoItem component
/* eslint-disable */
import { useState } from "react";

const TodoItem = ({itemProp, setTodos, delTodo}) => {
  const [editing, setEditing] = useState(false);
   
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};

  if(editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  }

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatedTitle,
        };
      }
      return todo;
    })
  );
  }

  

  const handleChange = (id) => {
    setTodos((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
  }
  return (
    <>
    <li className="item">
      <div className="content" style={viewMode}>
      <input 
      type='checkbox'
      checked={itemProp.completed}
      onChange={()=> handleChange(itemProp.id)}
      />
      <button onClick={handleEditing}>Edit</button>
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      <span style={itemProp.completed ? completedStyle : null}>
      {itemProp.title}
      </span>
      </div>
      <input
      type="text"
      style={editMode}
      className="inputText"
      value={itemProp.title}
      onChange={(e)=> setUpdate(e.target.value, itemProp.id)}
      onKeyDown={handleUpdateDone}
      />
    </li>
    </>
  )
}

export default TodoItem
