import { connect } from 'react-redux';
import { General } from './index';

const mapStateToProps = state => ({ films: state.generalPage.films })

export const GeneralContainer = connect(mapStateToProps)(General)