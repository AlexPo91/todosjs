import React from "react"
import PropTypes, { bool } from "prop-types"
import styles from "./styles.module.css"

const TodoItem = ({ item, deleteTask, setActiveStatus, setEditableTask }) => (
  <>
    <div className={styles.todoItem}>
      <span
        className={styles.nameItem}
        onClick={(e) => {
          e.stopPropagation()
          setActiveStatus(item.id)
        }}
        aria-hidden="true"
      >
        {item.task}
      </span>
      {!item.isActive && (
        <span>
          <button type="button" onClick={() => setEditableTask(item.id)}>
            Edit
          </button>
          <button type="button" onClick={() => deleteTask(item.id)}>
            Delete
          </button>
        </span>
      )}
    </div>
  </>
)
TodoItem.propTypes = {
  // editableTask: PropTypes.number,
  item: PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
    isActive: bool,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  setActiveStatus: PropTypes.func.isRequired,
  setEditableTask: PropTypes.func.isRequired,
}
export default TodoItem
