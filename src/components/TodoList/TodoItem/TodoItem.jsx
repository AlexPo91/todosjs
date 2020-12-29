import React from "react"
import PropTypes, { bool } from "prop-types"
import styles from "./styles.module.css"
import animation from "../../../assets/animation.module.css"

const TodoItem = ({
  item,
  deleteTask,
  setActiveStatus,
  setEditableTask,
  editableTask,
}) => (
  <>
    <div className={`${styles.todoItem} ${animation.fadeIn}`}>
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
      {item.isActive && (
        <button
          type="button"
          onClick={() => deleteTask(item.id)}
          disabled={editableTask}
        >
          Delete
        </button>
      )}
      {!item.isActive && (
        <span>
          <button
            type="button"
            onClick={() => setEditableTask(item.id)}
            disabled={editableTask}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => deleteTask(item.id)}
            disabled={editableTask}
          >
            Delete
          </button>
        </span>
      )}
    </div>
  </>
)
TodoItem.propTypes = {
  editableTask: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.string,
    task: PropTypes.string,
    isActive: bool,
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  setActiveStatus: PropTypes.func.isRequired,
  setEditableTask: PropTypes.func.isRequired,
}
TodoItem.defaultProps = {
  editableTask: null,
}
export default TodoItem
