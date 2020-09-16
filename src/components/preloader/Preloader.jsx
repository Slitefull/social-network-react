import React from 'react';
import PreloaderImg from '../../assets/images/preloader.svg';
import { PreloaderStyled, PreloaderWrapper } from './styled';


export const Preloader = () => (
  <PreloaderWrapper>
    <PreloaderStyled src = { PreloaderImg } />
  </PreloaderWrapper>
)