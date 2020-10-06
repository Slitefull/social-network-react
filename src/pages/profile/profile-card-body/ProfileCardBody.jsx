import React from "react";
import {
  ProfileCardAvatar,
  ProfileCardBody,
  ProfileCardFullName,
  ProfileCardImage,
  ProfileCardInfo, ProfileCardJob,
  ProfileCardStatus
} from "./styled";

import avatar from "../../../assets/images/avatar.jpg";
import { ProfileStatusContainer } from "../profile-status/ProfileStatus";

export const ProfileCardBodyWrapper = ({profile}) => {
  const {photos, fullName, aboutMe, lookingForAJob, lookingForAJobDescription} = profile;

  return (
    <ProfileCardBody>
      <ProfileCardAvatar>
        {
          photos.large
            ? <ProfileCardImage src={photos.large}></ProfileCardImage>
            : <ProfileCardImage src={avatar}></ProfileCardImage>
        }
      </ProfileCardAvatar>
      <ProfileCardInfo>
        <ProfileStatusContainer/>
        <ProfileCardStatus/>
        {
          fullName
            ? <ProfileCardFullName>{fullName}</ProfileCardFullName>
            : <ProfileCardFullName>Ноунейм</ProfileCardFullName>
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
      </ProfileCardInfo>
    </ProfileCardBody>
  )
}