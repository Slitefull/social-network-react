import React from "react";
import { ProfileCard, ProfileCardImage, ProfilePage } from './styled';
import avatar from '../../assets/images/avatar.jpg'


export const Profile = () => (
  <ProfilePage>
    <ProfileCard>
      <ProfileCardImage src = { avatar }></ProfileCardImage>
    </ProfileCard>
  </ProfilePage>
)
