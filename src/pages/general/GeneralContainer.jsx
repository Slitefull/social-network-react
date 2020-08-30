import { connect } from "react-redux";
import { General } from "./General";

const mapStateToProps = state => { return { films: state.generalPage.films } }

export const GeneralContainer = connect(mapStateToProps)(General)