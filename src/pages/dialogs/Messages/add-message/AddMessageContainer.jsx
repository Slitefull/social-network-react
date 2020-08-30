import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/index';
import { AddMessage } from '../../../index';
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        newMessageText: state.newMessageText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPost: () => { dispatch(addPostCreator()) },
        onPostChange: postMessage => { dispatch(updateNewPostTextCreator(postMessage)) }
    }
}

export const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)