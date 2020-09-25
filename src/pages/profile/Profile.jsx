import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar from '../../assets/images/avatar.jpg'
import profileBackground from '../../assets/images/profile-background.jpg'

import { Preloader } from '../../components/preloader/Preloader';

import {
  ProfileCard, ProfileCardAvatar, ProfileCardBody,
  ProfileCardFullName,
  ProfileCardImage, ProfileCardInfo,
  ProfileCardJob, ProfileCardSocial,
  ProfileCardStatus,
  ProfilePage, ProfilePageBackgroundContainer
} from './styled';

library.add(fab)


export const Profile = ({ profile }) => {
  if (!profile) { return <Preloader/> }

  const { fullName, photos, aboutMe, lookingForAJob, lookingForAJobDescription, contacts } = profile;
  const { github, facebook, vk, twitter, instagram, youtube } = contacts;

  return (
    <ProfilePage>
      <ProfilePageBackgroundContainer style = {{ backgroundImage: `url(${profileBackground})` }}/>
      <ProfileCard>
        <ProfileCardBody>
          <ProfileCardAvatar>
            {
              photos.large
                ? <ProfileCardImage src = { photos.large }></ProfileCardImage>
                : <ProfileCardImage src = { avatar }></ProfileCardImage>
            }
          </ProfileCardAvatar>
          <ProfileCardInfo>
            {
              fullName
                ? <ProfileCardFullName>{ fullName }</ProfileCardFullName>
                : <ProfileCardFullName>Ноунейм</ProfileCardFullName>
            }
            {
              aboutMe
                ? <ProfileCardStatus>{ aboutMe }</ProfileCardStatus>
                : <ProfileCardStatus>Нету статуса</ProfileCardStatus>
            }
            {
              lookingForAJob
                ? <ProfileCardJob>Работа: { lookingForAJobDescription }</ProfileCardJob>
                : <ProfileCardJob>Не ищу роботу!</ProfileCardJob>
            }
          </ProfileCardInfo>
        </ProfileCardBody>
        <ProfileCardSocial>
          {
            github
              ? <a href = { 'https://' + github }><FontAwesomeIcon style = { {color: "#ffffff", fontSize: "20px"} } icon = { ["fab", "github"] } /></a>
              : null
          }
          {
            facebook
              ? <a href = { 'https://' + facebook }><FontAwesomeIcon style = { {color: "#ffffff", fontSize: "20px"} } icon = { ["fab", "facebook"] } /></a>
              : null
          }
          {
            vk
              ? <a href = { 'https://' + vk }><FontAwesomeIcon style = { {color: "#ffffff", fontSize: "20px"} } icon = { ["fab", "vk"] }/></a>
              : null
          }
          {
            twitter
              ? <a href = { 'https://' + twitter }><FontAwesomeIcon style = { {color: "#ffffff", fontSize: "20px"} } icon = { ["fab", "twitter"] } /></a>
              : null
          }
          {
            instagram
              ? <a href = { 'https://' + instagram }><FontAwesomeIcon style = { {color: "#ffffff", fontSize: "20px"} } icon = { ["fab", "instagram"] } /></a>
              : null
          }
          {
            youtube
              ? <a href = { 'https://' + youtube }><FontAwesomeIcon style = { {color: "#ffffff", fontSize: "20px"} } icon = { ["fab", "youtube"] } /></a>
              : null
          }
        </ProfileCardSocial>
      </ProfileCard>
    </ProfilePage>
  )
}