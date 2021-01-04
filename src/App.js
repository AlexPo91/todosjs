import React from "react"
import "./App.css"
import AddPanelContainer from "./components/AddPanel"
import HeaderContainer from "./components/Header"
import SearchPanelContainer from "./components/SearchPanel"
import TodoListContainer from "./components/TodoList"

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <AddPanelContainer />
      <SearchPanelContainer />
      <TodoListContainer />
    </div>
  )
}

export default App
