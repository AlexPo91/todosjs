import React from "react"
import PropTypes from "prop-types"

const AddPanel = ({ task, setNewTask, addNewTask }) => {
  const onChangeText = (e) => {
    setNewTask(e.target.value)
  }
  return (
    <form>
      <input
        type="text"
        placeholder="inter task"
        value={task}
        onChange={onChangeText}
      />
      <input type="button" value="save" onClick={addNewTask} />
    </form>
  )
}

AddPanel.propTypes = {
  task: PropTypes.string.isRequired,
  setNewTask: PropTypes.func.isRequired,
  addNewTask: PropTypes.func.isRequired,
}
export default AddPanel
