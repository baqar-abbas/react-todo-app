//TodosLogic component
// import { useState, useEffect } from "react";
import { TodosProvider } from "../context/TodosContext";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
// import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
    
  return (
    <TodosProvider>
        <InputTodo />
        <TodosList />
  </TodosProvider>
  )
}

export default TodosLogic
