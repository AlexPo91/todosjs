import { connect } from "react-redux"
import TodoList from "./TodoList"
import {
  deleteTaskAC,
  setActiveStatusAC,
  setEditableTaskAC,
  cancelEditableTaskAC,
} from "../../redux/todoReducer"

const mapStateToProps = (state) => ({
  editableTask: state.todo.editableTask,
  todos: state.todo.todos,
})
const mapDispatchToProps = (dispatch) => ({
  deleteTask(id) {
    dispatch(deleteTaskAC(id))
  },
  setActiveStatus(id) {
    dispatch(setActiveStatusAC(id))
  },
  setEditableTask(id) {
    dispatch(setEditableTaskAC(id))
  },
  cancelEditableTask() {
    dispatch(cancelEditableTaskAC())
  },
})
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoListContainer
