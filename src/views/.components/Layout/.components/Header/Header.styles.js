import styled from 'styled-components';

import { spin } from 'views/.tools/Styles/KeyFrames';

const Header = styled('header')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  width: calc(100% - 2rem);
`;

const Logo = styled('img')`
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`;

export const Styles = { Header, Logo };
