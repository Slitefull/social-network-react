import React from "react";
import {
    ProfileCard,
    ProfileCardFullName,
    ProfileCardImage,
    ProfileCardJob,
    ProfileCardStatus,
    ProfilePage
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '../../assets/images/avatar.jpg'
import {Preloader} from '../../components/preloader/Preloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee)

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
                <FontAwesomeIcon icon={["fab", "github"]} />
            </ProfileCard>
        </ProfilePage>
    )
}
