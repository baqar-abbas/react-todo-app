//TodosLogic component
import { useState, useEffect } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
    const [todos, setTodos] = useState(getInitialTodos());

    function getInitialTodos() {
      // getting stored items from the local storage
      const temp = localStorage.getItem('todos');
      const savedTodos = JSON.parse(temp);
      return savedTodos || [];
    }

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    const addTodoItem = (title) => {
      // update state with user's input
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false,
      }
      setTodos([...todos, newTodo]);
    };
    
    const delTodo = (id) => {
      console.log('deleted', id);
      setTodos([
        ...todos.filter((todo) =>{
          return todo.id !== id;
        })
      ])
    }

  return (
    <div>
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList todos={todos} setTodos={setTodos} delTodo={delTodo} />
  </div>
  )
}

export default TodosLogic
