import React from "react";
import {ProfileCardSocial} from "../styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab)


export const ProfileCardSocialComponent = ({contacts}) => {
  const {github, facebook, vk, twitter, instagram, youtube} = contacts;

  return (
    <ProfileCardSocial>
      {
        github
          ? <a href={'https://' + github}><FontAwesomeIcon style={{color: "#ffffff", fontSize: "20px"}}
                                                           icon={["fab", "github"]}/></a>
          : null
      }
      {
        facebook
          ? <a href={'https://' + facebook}><FontAwesomeIcon style={{color: "#ffffff", fontSize: "20px"}}
                                                             icon={["fab", "facebook"]}/></a>
          : null
      }
      {
        vk
          ? <a href={'https://' + vk}><FontAwesomeIcon style={{color: "#ffffff", fontSize: "20px"}}
                                                       icon={["fab", "vk"]}/></a>
          : null
      }
      {
        twitter
          ? <a href={'https://' + twitter}><FontAwesomeIcon style={{color: "#ffffff", fontSize: "20px"}}
                                                            icon={["fab", "twitter"]}/></a>
          : null
      }
      {
        instagram
          ? <a href={'https://' + instagram}><FontAwesomeIcon style={{color: "#ffffff", fontSize: "20px"}}
                                                              icon={["fab", "instagram"]}/></a>
          : null
      }
      {
        youtube
          ? <a href={'https://' + youtube}><FontAwesomeIcon style={{color: "#ffffff", fontSize: "20px"}}
                                                            icon={["fab", "youtube"]}/></a>
          : null
      }
    </ProfileCardSocial>
  )
}