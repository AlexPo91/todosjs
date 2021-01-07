import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const Header = ({ todos }) => {
  const countActiveTask = todos.filter((el) => el.isActive).length
  const countAllTask = todos.length
  return (
    <div className={styles.header}>
      <div className={styles.title}>My ToDo List</div>
      <div className={styles.subTitle}>
        Total {countAllTask} tasks, completed {countActiveTask} tasks
      </div>
    </div>
  )
}
Header.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Header
