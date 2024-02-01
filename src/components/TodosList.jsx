// TodosList component
/* eslint-disable */
import TodoItem from './TodoItem'

const TodosList = ({todos, setTodos, delTodo}) => {
  return (
    <ul>
    {todos.map((todo) => (
    <TodoItem itemProp={todo} key={todo.id} setTodos={setTodos} delTodo={delTodo} />
    ))}
  </ul>
  )
}

export default TodosList
