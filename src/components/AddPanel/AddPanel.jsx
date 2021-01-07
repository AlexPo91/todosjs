import React from "react"
import PropTypes from "prop-types"
import { AppstoreAddOutlined } from "@ant-design/icons"
import styles from "./styles.module.css"

const AddPanel = ({ task, setNewTask, addNewTask, editableTask }) => {
  const onChangeText = (e) => {
    setNewTask(e.target.value)
  }
  return (
    <form className={styles.formAddTask}>
      <input
        type="text"
        placeholder="Add task"
        value={task}
        onChange={onChangeText}
      />
      <button
        className={styles.btnAddTask}
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          addNewTask()
        }}
        disabled={!!editableTask || !task}
      >
        <AppstoreAddOutlined style={{ fontSize: "22px", color: "#4682B4" }} />
      </button>
    </form>
  )
}

AddPanel.propTypes = {
  editableTask: PropTypes.string,
  task: PropTypes.string.isRequired,
  setNewTask: PropTypes.func.isRequired,
  addNewTask: PropTypes.func.isRequired,
}
AddPanel.defaultProps = {
  editableTask: null,
}
export default AddPanel
