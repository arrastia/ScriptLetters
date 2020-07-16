import React from 'react';

import logo from 'assets/svg/logo.svg';

import { FaLanguage } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

import { Styles } from './Header.styles';

import { Button } from 'views/.components/Button';
import { Dropdown } from 'views/.components/Dropdown';

import { useDarkMode } from 'views/.tools/Hooks/useDarkMode';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode(false);

  const languageItems = [
    { language: 'SPANISH', code: 'es' },
    { language: 'ENGLISH', code: 'en' },
    { language: 'SLOVAK', code: 'sk' }
  ];

  const icon = <FiCheckCircle />;

  return (
    <Styles.Header>
      <Button icon={isDarkMode ? <RiMoonLine /> : <RiSunLine />} onClick={() => setIsDarkMode(!isDarkMode)} />
      <Styles.Logo src={logo} alt="logo" />
      <Dropdown
        // onItemClick={onChangeLang}
        icon={<FaLanguage />}
        items={languageItems}
        label={'Language'}
        panelStyle={{ position: 'absolute' }}
      />
    </Styles.Header>
  );
};
