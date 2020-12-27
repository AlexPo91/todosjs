import React from "react"
import "./App.css"
import HeaderContainer from "./components/Header/HeaderContainer"
import TodoList from "./components/TodoList/TodoList"

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <TodoList />
    </div>
  )
}

export default App
