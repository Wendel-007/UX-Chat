import React from 'react';
import style from './HomePage.module.css';
import { BackLandingPage } from '../components/back-landingpage';
import {RedirectBar} from '../components/redirect-bar';

export function HomePage() {

  return (
    <div className={style.container}>
      <BackLandingPage/>
      <RedirectBar/>
    </div>
  );
}
