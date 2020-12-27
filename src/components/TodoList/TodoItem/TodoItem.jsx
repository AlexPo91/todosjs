import React from "react"
import styles from "./styles.module.css"

const TodoItem = () => (
  <div className={styles.todoItem}>
    <span className={styles.nameItem}>Task 1</span>
    <button type="button">Edit</button>
    <button type="button">Delete</button>
  </div>
)

export default TodoItem
