import { createStore, combineReducers } from "redux"
import todoReducer from "./todoReducer"

const reducers = combineReducers({ todo: todoReducer })
const persistedState = localStorage.getItem("todoState")
  ? JSON.parse(localStorage.getItem("todoState"))
  : {}
const store = createStore(
  reducers,
  persistedState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.subscribe(() => {
  localStorage.setItem("todoState", JSON.stringify(store.getState()))
})
window.store = store
export default store
