import React from 'react';

import { FaAcquisitionsIncorporated } from 'react-icons/fa';

import './Home.css';

import { Button } from 'views/.components/Button';
import { ReactLogo } from 'views/.components/ReactLogo';
import { Card } from 'views/.components/Card';

const cardData = [
  {
    label: 'React hooks',
    redirect: 'https://reactjs.org',
    logo: <ReactLogo />
  },
  {
    label: 'React hooks',
    redirect: 'https://reactjs.org',
    logo: <ReactLogo />
  },
  {
    label: 'React hooks',
    redirect: 'https://reactjs.org',
    logo: <ReactLogo />
  }
];

export const Home = () => (
  <div className="App">
    <div className="App-header">
      <Button label="label" icon={<FaAcquisitionsIncorporated />} />
      {cardData.map(card => (
        <Card redirect={card.redirect} logo={card.logo} label={card.label} />
      ))}
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  </div>
);
