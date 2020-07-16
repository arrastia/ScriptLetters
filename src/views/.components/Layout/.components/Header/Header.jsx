import React from 'react';

import logo from 'assets/svg/logo.svg';

import { RiSunLine, RiMoonLine } from 'react-icons/ri';

import { Styles } from './Header.styles';

import { Button } from 'views/.components/Button';

import { useDarkMode } from 'views/.tools/Hooks/useDarkMode';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode(false);

  return (
    <Styles.Header>
      <Styles.Logo src={logo} alt="logo" />
      <Button icon={isDarkMode ? <RiMoonLine /> : <RiSunLine />} onClick={() => setIsDarkMode(!isDarkMode)} />
    </Styles.Header>
  );
};
