import { animated } from 'react-spring';
import styled from 'styled-components';

const Item = styled(animated.span)`
  color: #4e4e4e;
  cursor: pointer;
  padding: 0.5rem;
  text-decoration: none;
`;

const Panel = styled(animated.div)`
  background: #ebebeb;
  border-radius: 7px;
  display: flex;
  flex-flow: column nowrap;
  font-size: 1rem;
  margin-top: 10px;
  width: 100%;
  text-align: left;
`;

export const Styles = { Item, Panel };
