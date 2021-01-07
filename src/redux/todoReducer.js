/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from "uuid"

const SET_NEW_TASK = "SET_NEW_TASK"
const SET_SEARCH_TASK = "SET_SEARCH_TASK"
const ADD_NEW_TASK = "ADD_NEW_TASK"
const SAVE_CHANGE_TASK = "SAVE_CHANGE_TASK"
const DELETE_TASK = "DELETE_TASK"
const SET_ACTIVE_STATUS = "SET_ACTIVE_STATUS"
const SET_EDITABLE_TASK = "SET_EDITABLE_TASK"
const CANCEL_EDITABLE_TASK = "CANCEL_EDITABLE_TASK"

const initialState = {
  newTask: "",
  searchTask: "",
  editableTask: null,
  todos: [],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_TASK:
      return {
        ...state,
        newTask: action.newTask,
      }
    case ADD_NEW_TASK: {
      const newTask = {
        id: uuidv4(),
        task: state.newTask,
        isActive: false,
      }
      return {
        ...state,
        newTask: "",
        todos: [newTask, ...state.todos].sort(
          (a, b) => a.isActive - b.isActive
        ),
      }
    }
    case DELETE_TASK: {
      const newTodos = state.todos
        .filter((el) => el.id !== action.id)
        .sort((a, b) => a.isActive - b.isActive)
      return {
        ...state,
        todos: newTodos,
      }
    }
    case SET_EDITABLE_TASK: {
      return {
        ...state,
        editableTask: action.id,
      }
    }
    case CANCEL_EDITABLE_TASK: {
      return {
        ...state,
        editableTask: null,
      }
    }
    case SAVE_CHANGE_TASK: {
      const index = state.todos.findIndex((el) => el.id === action.id)
      const oldTask = state.todos[index]
      const newTask = { ...oldTask, task: action.editedTask }
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          newTask,
          ...state.todos.slice(index + 1),
        ].sort((a, b) => a.isActive - b.isActive),
      }
    }
    case SET_ACTIVE_STATUS: {
      const index = state.todos.findIndex((el) => el.id === action.id)
      const oldTask = state.todos[index]
      const newTask = { ...oldTask, isActive: true }

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          newTask,
          ...state.todos.slice(index + 1),
        ].sort((a, b) => a.isActive - b.isActive),
      }
    }
    case SET_SEARCH_TASK: {
      return {
        ...state,
        searchTask: action.searchTask,
      }
    }

    default:
      return state
  }
}

export const setNewTaskAC = (newTask) => ({
  type: SET_NEW_TASK,
  newTask,
})
export const addNewTaskAC = () => ({
  type: ADD_NEW_TASK,
})
export const deleteTaskAC = (id) => ({
  type: DELETE_TASK,
  id,
})
export const setActiveStatusAC = (id) => ({
  type: SET_ACTIVE_STATUS,
  id,
})
export const setEditableTaskAC = (id) => ({
  type: SET_EDITABLE_TASK,
  id,
})
export const cancelEditableTaskAC = () => ({
  type: CANCEL_EDITABLE_TASK,
})
export const saveChangeTaskAC = (id, editedTask) => ({
  type: SAVE_CHANGE_TASK,
  id,
  editedTask,
})
export const searchTaskAC = (searchTask) => ({
  type: SET_SEARCH_TASK,
  searchTask,
})
export default todoReducer
