import { connect } from 'react-redux';

import { NewUser } from './NewUser';
import { follow, unFollow } from '../../../redux/users-reducer';


export const NewUserContainer = connect(null, { follow, unFollow })(NewUser)