/* eslint-disable */
import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosContext = createContext(null);

export const TodosProvider = ({ children}) => {
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
    };
     return (
        <TodosContext.Provider value={{
            todos,
            setTodos,
            delTodo,
            addTodoItem,
          }}
    >
        {children}
        </TodosContext.Provider>
     );
};

// export {TodosContext};
export const useTodosContext = () => useContext(TodosContext);