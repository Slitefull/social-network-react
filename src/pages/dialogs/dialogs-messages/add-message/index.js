import {connect} from "react-redux";

import {AddMessage} from './AddMessage';
import {addPost} from '../../dialogs-reducer';


const mapDispatchToProps = dispatch => {
    return {
        sendMessage: message => {
            dispatch(addPost(message))
        }
    }
}

export const AddMessageContainer = connect(null, mapDispatchToProps)(AddMessage)