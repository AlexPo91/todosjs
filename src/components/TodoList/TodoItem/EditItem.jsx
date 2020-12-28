import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const EditItem = ({ id, task, cancelEditableTask, saveChangeTask }) => {
  const [changeTask, setChangeTask] = useState(task)
  const onChangeTask = (e) => {
    setChangeTask(e.target.value)
  }
  const onSaveChangeTask = () => {
    saveChangeTask(id, changeTask)
    cancelEditableTask()
  }
  return (
    <div className={styles.editItem}>
      <input type="text" value={changeTask} onChange={onChangeTask} />
      <button type="button" onClick={onSaveChangeTask}>
        Save
      </button>
      <button
        type="button"
        onClick={() => {
          cancelEditableTask()
        }}
      >
        Cancel
      </button>
    </div>
  )
}
EditItem.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  cancelEditableTask: PropTypes.func.isRequired,
  saveChangeTask: PropTypes.func.isRequired,
}
export default EditItem
