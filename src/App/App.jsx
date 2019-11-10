import React from 'react';
import style from './App.module.css';

import { Header } from '../components/Header/Header';
import { Resume } from '../components/Resume/Resume';
import { Stack } from '../components/Stack/Stack';
import { Jobs } from '../components/Jobs/Jobs';
import { Footer } from '../components/Footer/Footer';
import { Logo } from '../components/Logo/Logo';
import { LINKS } from '../constants/links';
import { ME } from '../constants/me';
import {
  IconGithub,
  IconLinkedin,
  IconMedium,
  IconInstagram,
  IconEmail,
} from '../components/Icon';

const List = () => (
  <ul className={style.list}>
    <li className={style.item}>
      <a href={LINKS[ME][ME.EMAIL]}>
        <IconEmail className={style.icon} />
      </a>
    </li>
    <li className={style.item}>
      <a href={LINKS[ME][ME.GIT_HUB]}>
        <IconGithub className={style.icon} />
      </a>
    </li>
    <li className={style.item}>
      <a href={LINKS[ME][ME.LINKEDIN]}>
        <IconLinkedin className={style.icon} />
      </a>
    </li>
    <li className={style.item}>
      <a href={LINKS[ME][ME.INSTAGRAM]}>
        <IconInstagram className={style.icon} />
      </a>
    </li>
    <li className={style.item}>
      <a href={LINKS[ME][ME.MEDIUM]}>
        <IconMedium className={style.icon} />
      </a>
    </li>
  </ul>
);

const App = () => {
  return (
    <div className={style.App}>
      <List />
      <Logo className={style.logo} />
      <Header />
      <Resume />
      <Stack />
      <Jobs />
      <Footer />
      <List />
    </div>
  );
};

export { App };
