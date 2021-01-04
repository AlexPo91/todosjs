import { connect } from "react-redux"
import SearchPanel from "./SearchPanel"

import { searchTaskAC } from "../../redux/todoReducer"

const mapStateToProps = (state) => ({
  searchTask: state.todo.searchTask,
})
const mapDispatchToProps = (dispatch) => ({
  setSearchTask(newMessage) {
    dispatch(searchTaskAC(newMessage))
  },
})
const SearchPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel)
export default SearchPanelContainer
