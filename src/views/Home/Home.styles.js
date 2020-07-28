import styled from 'styled-components';

import { spin } from 'views/.tools/Styles/KeyFrames';

const Cards = styled('div')`
  align-items: center;
  display: flex;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  position: relative;
  height: 100%;

  > div {
    flex-basis: 100%;
    margin: 1rem;
    position: relative;

    @media screen and (min-width: 414px) {
      flex-basis: auto;
    }
  }

  @media screen and (min-width: 414px) {
    /* flex-direction: row; */
    /* justify-content: space-around; */
    flex-flow: row wrap;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0;
    position: relative;
  }
`;

const Home = styled('header')``;

export const Styles = { Cards, Home };
