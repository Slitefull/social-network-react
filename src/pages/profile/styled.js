import styled from 'styled-components'

export const ProfilePage = styled.main`
  display: block;
`

export const ProfilePageBackgroundContainer = styled.div`
  width: 100%;
  height: 400px;
  background-position: center;
  border-radius: 5px;
`

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translate(10px, -240px);
`

export const ProfileCardAvatar = styled.div`
  padding: 5px;
  background: #ffffff;
`

export const ProfileCardImage = styled.img`
   max-width: 200px;
`

export const ProfileCardBody = styled.div`
  display: flex;
  flex-direction: row;
`

export const ProfileCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-left: 20px;
  color: #ffffff;
  font-weight: 500;
`

export const ProfileCardFullName = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 25px;
`

export const ProfileCardStatus = styled.div`

`

export const ProfileCardJob = styled.div`

`

export const ProfileCardSocial = styled.div`
  margin: 3px 0 0 0;
`