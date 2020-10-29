import React from "react";
import {Field, reduxForm} from 'redux-form';

import profileBackground from '../../assets/images/profile-background.jpg'
import {Preloader} from '../../components/common/preloader/Preloader';

import {ProfileCard, ProfilePage, ProfilePageBackgroundContainer} from './styled';
import {ProfileCardBodyContainer} from "./profile-card-body";
import {PostsContainer} from "./posts";
import {maxLengthCreator, required} from "../../helpers/validators/validators";
import {Textarea} from "../../components/common/form-controls/form-controls";


const maxLength30 = maxLengthCreator(30);

export const Profile = ({profile, addPost}) => {
  if (!profile) {
    return <Preloader/>
  }

  const addNewPost = values => {
    addPost(values.post)
  }

  return (
    <ProfilePage>
      <ProfilePageBackgroundContainer style={{backgroundImage: `url(${profileBackground})`}}/>
      <ProfileCard>
        <ProfileCardBodyContainer/>
        <PostReduxForm onSubmit={addNewPost}/>
        <PostsContainer/>
      </ProfileCard>
    </ProfilePage>
  )
}

const PostForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name={'post'}
        component={Textarea}
        placeholder={'Post Message'}
        validate={[required, maxLength30]}/>
      <div>
        <button>Add New Post</button>
      </div>
    </form>
  )
}

const PostReduxForm = reduxForm({form: 'profile-post'})(PostForm)