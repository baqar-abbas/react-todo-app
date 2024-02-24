// TodoItem component
/* eslint-disable */
import { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useTodosStore } from '../store'

const TodoItem = ({itemProp}) => {
  const [editing, setEditing] = useState(false);
  const editInputRef = useRef();
  // const [updateInput, setUpdateInput] = useState(itemProp.title);
  const handleChange = useTodosStore((state) => state.handleChange);
  const delTodo = useTodosStore((state) => state.delTodo);
  const setUpdate = useTodosStore((state) => state.setUpdate);
   
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
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  }

  // const setUpdate = (updatedTitle, id) => {
  //   setTodos((prevState) =>
  //   prevState.map((todo) => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         title: updatedTitle,
  //       };
  //     }
  //     return todo;
  //   })
  // );
  // }

  // const handleChange = (id) => {
  //   setTodos((prevState) =>
  //   prevState.map((todo) => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     }
  //     return todo;
  //   })
  // );
  // }
  return (
    <>
    <li className="item">
      <div className="content" style={viewMode}>
      <input 
      type='checkbox'
      checked={itemProp.completed}
      onChange={()=> handleChange(itemProp.id)}
      />
      <button onClick={handleEditing}>
      <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
      <button onClick={() => delTodo(itemProp.id)}>
      <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
      <span style={itemProp.completed ? completedStyle : null}>
      {itemProp.title}
      </span>
      </div>
      <input
      type="text"
      style={editMode}
      className="inputText"
      defaultValue={itemProp.title}
      ref={editInputRef}
      // value={updateInput}
      // onChange={(e)=> setUpdateInput(e.target.value)}
      onKeyDown={handleUpdateDone}
      />
    </li>
    </>
  )
}

export default TodoItem
