import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const SearchPanel = ({ setSearchTask, searchTask }) => {
  const onChangeText = (e) => {
    setSearchTask(e.target.value)
  }
  return (
    <form className={styles.formSearchTask}>
      <input
        type="text"
        placeholder="Search task"
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
