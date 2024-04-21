import React from 'react';
import style from './LandingPage.module.css';
import { BackLandingPage } from '../components/back-landingpage';
import {RedirectBar} from '../components/redirect-bar';

export function LandingPage() {

  return (
    <div className={style.container}>
      <BackLandingPage/>
      <RedirectBar/>
    </div>
  );
}
