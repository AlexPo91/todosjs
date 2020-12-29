/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import animation from "../../../assets/animation.module.css"

const EditItem = ({
  id,
  task,
  cancelEditableTask,
  saveChangeTask,
  // editableTask,
}) => {
  const [changeTask, setChangeTask] = useState(task)
  const onChangeTask = (e) => {
    setChangeTask(e.target.value)
  }
  const onSaveChangeTask = () => {
    saveChangeTask(id, changeTask)
    cancelEditableTask()
  }
  return (
    <div className={`${styles.editItem} ${animation.fadeIn}`}>
      <input type="text" value={changeTask} onChange={onChangeTask} autoFocus />
      <button type="button" onClick={onSaveChangeTask} disabled={!changeTask}>
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
  // editableTask: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  cancelEditableTask: PropTypes.func.isRequired,
  saveChangeTask: PropTypes.func.isRequired,
}
export default EditItem
