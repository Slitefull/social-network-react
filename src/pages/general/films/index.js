import { connect } from 'react-redux';

import { Films } from './Films';


const mapStateToProps = state => ({ films: state.generalPage.films })

export const FilmsContainer = connect(mapStateToProps)(Films)