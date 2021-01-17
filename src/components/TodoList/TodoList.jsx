import React from "react"
import PropTypes from "prop-types"
import QueueAnim from "rc-queue-anim"
import TodoItem from "./TodoItem"
import EditItem from "./TodoItem/EditItem"
import styles from "./TodoItem/styles.module.css"

const TodoList = ({
  todos,
  deleteTask,
  searchTask,
  setActiveStatus,
  setEditableTask,
  cancelEditableTask,
  editableTask,
  saveChangeTask,
  setPortableItem,
  dragNDrop,
}) => {
  const dragStartHandler = (e, item) => {
    setPortableItem(item)
  }
  const dragLeaveHandler = (e) => {
    e.target.style.boxShadow = "none"
  }
  const dragEndHandler = (e) => {
    e.target.style.boxShadow = "none"
  }
  const dragOverHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (e.target.classList.contains(`${styles.nameItem}`)) {
      e.target.style.boxShadow = "0 4px 3px grey"
    }
  }
  const dropHandler = (e, item) => {
    e.preventDefault()
    dragNDrop(item.id)
    setPortableItem(null)
    e.target.style.boxShadow = "none"
  }
  return (
    <QueueAnim component="div" type={["left", "right"]} leaveReverse>
      {todos
        .filter((el) => el.task.includes(searchTask))
        .map((el) => (
          <div
            key={el.id}
            draggable
            onDragStart={(e) => dragStartHandler(e, el)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, el)}
          >
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
}

TodoList.propTypes = {
  editableTask: PropTypes.string,
  searchTask: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTask: PropTypes.func.isRequired,
  setActiveStatus: PropTypes.func.isRequired,
  setEditableTask: PropTypes.func.isRequired,
  cancelEditableTask: PropTypes.func.isRequired,
  saveChangeTask: PropTypes.func.isRequired,
  setPortableItem: PropTypes.func.isRequired,
  dragNDrop: PropTypes.func.isRequired,
}
TodoList.defaultProps = {
  editableTask: null,
}
export default TodoList
