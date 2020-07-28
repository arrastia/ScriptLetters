import React, { Fragment, useContext } from 'react';
import { withRouter } from 'react-router-dom';

import css from 'assets/svg/css.svg';

import { Styles } from './Home.styles';

import { Card } from 'views/.components/Card';
import { ReactLogo } from 'views/.components/ReactLogo';
import { RotateBoxes } from 'views/.components/RotateBoxes';

import { LanguageContext } from 'views/.tools/Contexts/LanguageContext';
import { MessagesContext } from 'views/.tools/Contexts/MessagesContext';

export const Home = withRouter(({ history }) => {
  const { selected } = useContext(LanguageContext);
  const messages = useContext(MessagesContext);

  const cardData = [
    { label: messages[selected]['reactHooks'], redirect: 'https://reactjs.org', logo: <ReactLogo /> },
    {
      label: messages[selected]['cssAnimations'],
      redirect: 'https://developer.mozilla.org/es/docs/Web/CSS',
      logo: <RotateBoxes img={css} />
    },
    { label: messages[selected]['reactHooks'], redirect: 'https://reactjs.org', logo: <ReactLogo /> },
    { label: messages[selected]['reactHooks'], redirect: 'https://reactjs.org', logo: <ReactLogo /> }
  ];

  const handleRedirect = (url = 'a') => history.push(`/${url}`);

  return (
    <Fragment>
      <Styles.Cards>
        {cardData.map((card, i) => (
          <Card key={i} label={card.label} logo={card.logo} onClick={handleRedirect} redirect={card.redirect} />
        ))}
      </Styles.Cards>
    </Fragment>
  );
});
