import { App } from "./App";
import { connect } from "react-redux";

const mapStateToProps = state => ({ isModal: state.modalWindow.isModal })

export const AppContainer = connect(mapStateToProps)(App)