import React from "react";
import {
    ProfileCard,
    ProfileCardFullName,
    ProfileCardImage,
    ProfileCardJob,
    ProfileCardStatus,
    ProfilePage
} from './styled';
import avatar from '../../assets/images/avatar.jpg'
import {Preloader} from '../../components/preloader/Preloader';


export const Profile = ({profile}) => {

    if (!profile) {
        return <Preloader/>
    }

    const {fullName, photos, aboutMe, lookingForAJob, lookingForAJobDescription} = profile;

    return (
        <ProfilePage>
            <ProfileCard>
                {
                    fullName
                        ? <ProfileCardFullName>{fullName}</ProfileCardFullName>
                        : <ProfileCardFullName>Ноунейм</ProfileCardFullName>
                }
                {
                    photos.large
                        ? <ProfileCardImage src={photos.large}></ProfileCardImage>
                        : <ProfileCardImage src={avatar}></ProfileCardImage>
                }
                {
                    aboutMe
                        ? <ProfileCardStatus>{aboutMe}</ProfileCardStatus>
                        : <ProfileCardStatus>Нету статуса</ProfileCardStatus>
                }
                {
                    lookingForAJob
                        ? <ProfileCardJob>Работа: {lookingForAJobDescription}</ProfileCardJob>
                        : <ProfileCardJob>Не ищу роботу!</ProfileCardJob>
                }
            </ProfileCard>
        </ProfilePage>
    )
}
