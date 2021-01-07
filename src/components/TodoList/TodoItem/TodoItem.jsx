import React from "react"
import PropTypes, { bool } from "prop-types"
import {
  DeleteOutlined,
  EditOutlined,
  FileDoneOutlined,
} from "@ant-design/icons"
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
    <div
      className={`${animation.fadeIn} ${styles.todoListItem}`}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <span
        className={`${styles.nameItem} ${
          item.isActive ? styles.completedNameItem : ""
        }`}
      >
        {item.task}
      </span>
      {item.isActive && (
        <button
          className={styles.controlBtn}
          type="button"
          onClick={() => deleteTask(item.id)}
          disabled={editableTask}
        >
          <DeleteOutlined style={{ color: "#FF6347", fontSize: "18px" }} />
        </button>
      )}
      {!item.isActive && (
        <span className={styles.controlBtn}>
          <button
            type="button"
            onClick={() => {
              setActiveStatus(item.id)
            }}
            disabled={editableTask}
          >
            <FileDoneOutlined style={{ color: "#3CB371", fontSize: "18px" }} />
          </button>
          <button
            type="button"
            onClick={() => setEditableTask(item.id)}
            disabled={editableTask}
          >
            <EditOutlined style={{ color: "#4682B4", fontSize: "18px" }} />
          </button>
          <button
            type="button"
            onClick={() => deleteTask(item.id)}
            disabled={editableTask}
          >
            <DeleteOutlined style={{ color: "#FF6347", fontSize: "18px" }} />
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
