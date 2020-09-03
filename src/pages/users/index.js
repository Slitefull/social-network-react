import { connect } from 'react-redux';
import { Users as UsersComponent } from './Users';

const mapStateToProps = state => ({ users: state.users })

const mapDispatchToProps = {}

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)