import React from "react"
import PropTypes from "prop-types"
import TodoItem from "./TodoItem"
import EditItem from "./TodoItem/EditItem"

const TodoList = ({
  todos,
  deleteTask,
  setActiveStatus,
  setEditableTask,
  cancelEditableTask,
  editableTask,
  saveChangeTask,
}) => (
  <div>
    {todos.map((el) => (
      <div key={el.id}>
        {editableTask === el.id && (
          <EditItem
            id={el.id}
            task={el.task}
            cancelEditableTask={cancelEditableTask}
            saveChangeTask={saveChangeTask}
          />
        )}
        {editableTask !== el.id && (
          <TodoItem
            item={el}
            deleteTask={deleteTask}
            setActiveStatus={setActiveStatus}
            setEditableTask={setEditableTask}
          />
        )}
      </div>
    ))}
  </div>
)

TodoList.propTypes = {
  editableTask: PropTypes.number,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTask: PropTypes.func.isRequired,
  setActiveStatus: PropTypes.func.isRequired,
  setEditableTask: PropTypes.func.isRequired,
  cancelEditableTask: PropTypes.func.isRequired,
  saveChangeTask: PropTypes.func.isRequired,
}
TodoList.defaultProps = {
  editableTask: null,
}
export default TodoList
