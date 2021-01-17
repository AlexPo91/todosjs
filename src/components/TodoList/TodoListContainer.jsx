import { connect } from "react-redux"
import TodoList from "./TodoList"
import {
  deleteTaskAC,
  setActiveStatusAC,
  setEditableTaskAC,
  cancelEditableTaskAC,
  saveChangeTaskAC,
  setPortableItemAC,
  dragNDropAC,
} from "../../redux/todoReducer"

const mapStateToProps = (state) => ({
  editableTask: state.todo.editableTask,
  todos: state.todo.todos,
  searchTask: state.todo.searchTask,
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
  saveChangeTask(id, editedTask) {
    dispatch(saveChangeTaskAC(id, editedTask))
  },
  setPortableItem(item) {
    dispatch(setPortableItemAC(item))
  },
  dragNDrop(id) {
    dispatch(dragNDropAC(id))
  },
})
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoListContainer
