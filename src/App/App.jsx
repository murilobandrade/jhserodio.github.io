import React from 'react';
import Type from 'prop-types';
import style from './App.module.css';

import { Header } from '../components/Header/Header';
import { Resume } from '../components/Resume/Resume';
import { Stack } from '../components/Stack/Stack';
import { Jobs } from '../components/Jobs/Jobs';
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

const List = ({ position }) => (
  <ul className={`${style.list} ${position}`}>
    <li className={style.item}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={LINKS[ME.SELF][ME.EMAIL]}>
        <IconEmail className={style.icon} />
      </a>
    </li>
    <li className={style.item}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={LINKS[ME.SELF][ME.GIT_HUB]}>
        <IconGithub className={style.icon} />
      </a>
    </li>
    <li className={style.item}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={LINKS[ME.SELF][ME.LINKEDIN]}>
        <IconLinkedin className={style.icon} />
      </a>
    </li>
  </ul>
);

List.propTypes = {
  position: Type.string.isRequired,
};

const App = () => {
  return (
    <div className={style.App}>
      <List position={style._top} />
      <Logo className={style.logo} />
      <Header />
      <Resume />
      <Stack />
      <Jobs />
      <List position={style._bottom} />
    </div>
  );
};

export { App };
