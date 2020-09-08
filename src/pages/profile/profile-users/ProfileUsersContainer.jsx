import { connect } from 'react-redux';
import { ProfileUsers } from './ProfileUsers';

const mapStateToProps = state => ({ users: state.dialogsPage.users })

export const ProfileUsersContainer = connect(mapStateToProps)(ProfileUsers)
