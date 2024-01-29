// TodosList component
/* eslint-disable */
import TodoItem from './TodoItem'

const TodosList = ({todos}) => {
  return (
    <ul>
    {todos.map((todo) => (
    <TodoItem itemProp={todo} />
    ))}
  </ul>
  )
}

export default TodosList
