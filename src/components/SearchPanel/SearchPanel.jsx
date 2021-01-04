import React from "react"
import PropTypes from "prop-types"

const SearchPanel = ({ setSearchTask, searchTask }) => {
  const onChangeText = (e) => {
    setSearchTask(e.target.value)
  }
  return (
    <form>
      <input
        type="text"
        placeholder="inter search task"
        value={searchTask}
        onChange={onChangeText}
      />
    </form>
  )
}

SearchPanel.propTypes = {
  searchTask: PropTypes.string.isRequired,
  setSearchTask: PropTypes.func.isRequired,
}

export default SearchPanel
