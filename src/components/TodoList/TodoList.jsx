import React from "react"
import PropTypes from "prop-types"
import QueueAnim from "rc-queue-anim"
import TodoItem from "./TodoItem"
import EditItem from "./TodoItem/EditItem"

const TodoList = ({
  todos,
  deleteTask,
  searchTask,
  setActiveStatus,
  setEditableTask,
  cancelEditableTask,
  editableTask,
  saveChangeTask,
}) => (
  <QueueAnim component="div" type={["left", "right"]} leaveReverse>
    {todos
      .filter((el) => el.task.includes(searchTask))
      .map((el) => (
        <div key={el.id}>
          {editableTask === el.id && (
            <EditItem
              id={el.id}
              task={el.task}
              cancelEditableTask={cancelEditableTask}
              saveChangeTask={saveChangeTask}
              editableTask={editableTask}
            />
          )}
          {editableTask !== el.id && (
            <TodoItem
              item={el}
              deleteTask={deleteTask}
              setActiveStatus={setActiveStatus}
              setEditableTask={setEditableTask}
              editableTask={editableTask}
            />
          )}
        </div>
      ))}
  </QueueAnim>
)

TodoList.propTypes = {
  editableTask: PropTypes.string,
  searchTask: PropTypes.string.isRequired,
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
