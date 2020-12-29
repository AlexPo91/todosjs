import React from "react"
import PropTypes from "prop-types"

const AddPanel = ({ task, setNewTask, addNewTask, editableTask }) => {
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
      <input
        type="button"
        value="save"
        onClick={addNewTask}
        disabled={!!editableTask || !task}
      />
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
