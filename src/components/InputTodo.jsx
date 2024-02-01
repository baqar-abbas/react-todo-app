//InputTodo component
/* eslint-disable */
import { useState } from "react"
const InputTodo = ({ addTodoItem }) => {
  const [title,setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  }

const handleSubmit = (e) => {
e.preventDefault();
if (title.trim()) {
  addTodoItem(title);
  setTitle('');
  setMessage('');
} else {
  setMessage('Please add item.');
  setTimeout(() => {
    setMessage('');

  }, 3000)
}
}

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input
         type='text'
         value={title}
         onChange={handleChange} 
         placeholder='Add todo...' 
         />
        <button>Add</button>
    </form>
    <span>{message}</span>
    </>
  )
}

export default InputTodo
