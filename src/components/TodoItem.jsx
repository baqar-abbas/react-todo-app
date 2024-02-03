// TodoItem component
/* eslint-disable */

const TodoItem = ({itemProp, setTodos, delTodo}) => {
  const handleChange = (id) => {
    setTodos((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
  }
  return (
    <>
    <li className="item">
      <div className="content">
      <input 
      type='checkbox'
      checked={itemProp.completed}
      onChange={()=> handleChange(itemProp.id)}
      />
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
      </div>
    </li>
    </>
  )
}

export default TodoItem
