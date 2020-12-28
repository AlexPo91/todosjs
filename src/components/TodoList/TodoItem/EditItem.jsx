import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const EditItem = ({ task, cancelEditableTask }) => {
  const onChangeTask = (e) => {
    console.log(e)
  }
  return (
    <div className={styles.editItem}>
      <input type="text" defaultValue={task} onChange={onChangeTask} />
      <button type="button">Save</button>
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
  task: PropTypes.string.isRequired,
  cancelEditableTask: PropTypes.func.isRequired,
}
export default EditItem
