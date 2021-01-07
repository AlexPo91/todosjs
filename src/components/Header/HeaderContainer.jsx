import { connect } from "react-redux"
import Header from "./Header"

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
})
const HeaderContainer = connect(mapStateToProps)(Header)

export default HeaderContainer
