import React from "react";
import {Field, reduxForm} from 'redux-form';

import profileBackground from '../../assets/images/profile-background.jpg'
import {Preloader} from '../../components/preloader/Preloader';
import {ProfileCardBodyComponent} from "./profile-card-body/ProfileCardBodyComponent";
import {ProfileCardSocialComponent} from "./profile-card-social/ProfileCardSocialComponent";

import {ProfileCard, ProfilePage, ProfilePageBackgroundContainer} from './styled';


export const Profile = ({profile, status, updateStatus}) => {
    if (!profile) { return <Preloader/> }

    const onSubmit = dataForm => {
        console.log(dataForm)
    }

    const {contacts} = profile;

    return (
        <ProfilePage>
            <ProfilePageBackgroundContainer style={{backgroundImage: `url(${profileBackground})`}}/>
            <ProfileCard>
                <ProfileCardBodyComponent profile={profile} status={status} updateStatus={updateStatus}/>
                <ProfileCardSocialComponent contacts={contacts}/>
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

const PostReduxForm = reduxForm({ form: 'profile-post' })(PostForm)