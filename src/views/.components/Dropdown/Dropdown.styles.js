import styled from 'styled-components';
import { animated } from 'react-spring';

const Dropdown = styled('div')`
  margin: 0;
  position: relative;
  /* width: 150px; */
`;

const Icon = styled(animated.p)``;

const Radio = styled('div')`
  align-items: center !important;
  display: flex;
  justify-content: space-around;
  width: 100%;

  p {
    margin: 0;
  }

  svg {
    font-size: 1.5rem !important;
  }
`;

const RadioWrapper = styled(animated.button)`
  align-items: center;
  border-radius: 7px;
  border: none;
  display: flex;
  font-size: 1rem;
  outline: none;
  padding: 1rem;
  /* width: 150px; */
`;

const MenuPanel = styled(animated.div)``;

export const Styles = { Dropdown, Icon, MenuPanel, Radio, RadioWrapper };
