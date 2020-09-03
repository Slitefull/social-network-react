import { connect } from 'react-redux';

import { NewUser } from './NewUser';

const mapStateToProps = state => ({
  avatar: state.users.avatar,
  name: state.users.name,
  location: state.users.location,
  status: state.users.status
})

const mapDispatchToProps = {}

export const NewUserContainer = connect(mapStateToProps, mapDispatchToProps)(NewUser)