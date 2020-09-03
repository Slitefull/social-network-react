import { ProfileUsers } from './ProfileUsers';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ users: state.dialogsPage.users })

export const ProfileUsersContainer = connect(mapStateToProps)(ProfileUsers)