import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Input} from "../../../../components/common/form-controls/form-controls";
import {maxLengthCreator, required} from "../../../../helpers/validators/validators";

const maxLength10 = maxLengthCreator(10);

export const AddUser = ({addUser}) => {
    const addNewUser = values => {
        addUser(values.user)
    }

    return (
        <div className="new-user">
            <p className="new-user__name">Add user</p>
            <NewUserReduxForm onSubmit={addNewUser}/>
        </div>
    )
}

const NewUserForm = ({handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <Field
          name={'user'}
          component={Input}
          placeholder={'user'}
          className="new-user__input"
          validate={[required, maxLength10]}
        />
        <div>
            <button className="new-user__button">Add</button>
        </div>
    </form>
)

const NewUserReduxForm = reduxForm({form: 'new-user'})(NewUserForm)
