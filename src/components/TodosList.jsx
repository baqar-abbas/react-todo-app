// TodosList component
/* eslint-disable */
import TodoItem from './TodoItem'
import { useTodosStore } from '../store'

const TodosList = () => {
  const todos = useTodosStore((state) => state.todos);
  return (
    <ul>
    {todos.map((todo) => (
    <TodoItem itemProp={todo} key={todo.id} />
    ))}
  </ul>
  )
}

export default TodosList
