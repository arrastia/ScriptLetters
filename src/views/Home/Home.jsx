import React, { useContext } from 'react';

import { FaAcquisitionsIncorporated } from 'react-icons/fa';

import './Home.css';

import { Button } from 'views/.components/Button';
import { Card } from 'views/.components/Card';
import { ReactLogo } from 'views/.components/ReactLogo';

import { LanguageContext } from 'views/.tools/Contexts/LanguageContext';
import { MessagesContext } from 'views/.tools/Contexts/MessagesContext';

export const Home = () => {
  const { selected } = useContext(LanguageContext);
  const messages = useContext(MessagesContext);

  const cardData = [
    { label: messages[selected]['reactHooks'], redirect: 'https://reactjs.org', logo: <ReactLogo /> },
    { label: messages[selected]['reactHooks'], redirect: 'https://reactjs.org', logo: <ReactLogo /> },
    { label: messages[selected]['reactHooks'], redirect: 'https://reactjs.org', logo: <ReactLogo /> }
  ];

  return (
    <div className="App">
      <div className="App-header">
        <Button label="label" icon={<FaAcquisitionsIncorporated />} />
        {cardData.map(card => (
          <Card redirect={card.redirect} logo={card.logo} label={card.label} />
        ))}
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
    </div>
  );
};
