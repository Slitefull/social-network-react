import { connect } from 'react-redux';

import { Films } from '../index';

const mapStateToProps = state => ({ films: state.generalPage.films })

export const FilmsContainer = connect(mapStateToProps)(Films)