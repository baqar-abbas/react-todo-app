// TodosList component
/* eslint-disable */
import TodoItem from './TodoItem'
import { useTodosContext } from '../context/TodosContext';

const TodosList = () => {
  const { todos } = useTodosContext();
  return (
    <ul>
    {todos.map((todo) => (
    <TodoItem itemProp={todo} key={todo.id} />
    ))}
  </ul>
  )
}

export default TodosList
