import styled, { keyframes } from 'styled-components';

const Card = styled('div')`
  align-items: center;
  border-radius: 25px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-evenly;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  padding: 1rem;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  position: relative;
  width: 200px;

  &:hover {
    box-shadow: var(--box-shadow-hover);
  }
`;

const Icon = styled('span')`
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
`;

const Label = styled('span')``;

export const Styles = { Card, Icon, Label };
