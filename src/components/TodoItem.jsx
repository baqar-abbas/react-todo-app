// TodoItem component
/* eslint-disable */

const TodoItem = ({itemProp}) => {
  return (
    <li key={itemProp.id}>{itemProp.title}</li>
  )
}

export default TodoItem
