import React from "react";
import profileBackground from '../../assets/images/profile-background.jpg'
import {Preloader} from '../../components/preloader/Preloader';
import {ProfileCard, ProfilePage, ProfilePageBackgroundContainer} from './styled';
import {Field, reduxForm} from 'redux-form';
import {ProfileCardBodyContainer} from "./profile-card-body/ProfileCardBodyContainer";
import {ProfileCardSocialContainer} from "./profile-card-social/ProfileCardSocialContainer";

export const Profile = ({profile}) => {
  if (!profile) {
    return <Preloader/>
  }

  const onSubmit = dataForm => {
    console.log(dataForm)
  }

  return (
    <ProfilePage>
      <ProfilePageBackgroundContainer style={{backgroundImage: `url(${profileBackground})`}}/>
      <ProfileCard>
        <ProfileCardBodyContainer/>
        <ProfileCardSocialContainer/>
        <PostReduxForm onSubmit={onSubmit}/>
      </ProfileCard>
    </ProfilePage>
  )
}

const PostForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name={'post'} component={'textarea'} placeholder={'post'}/>
      <div>
        <button>Add New Post</button>
      </div>
    </form>
  )
}

const PostReduxForm = reduxForm({
  form: 'profile-post'
})(PostForm)
