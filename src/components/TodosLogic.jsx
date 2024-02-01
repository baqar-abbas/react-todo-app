//TodosLogic component
import { useState } from "react";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
    const [todos, setTodos] = useState([
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ]);

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
