import styled from 'styled-components';
import { rotate1, rotate2, rotate3 } from './RotateBoxes.keyframes';

const Img = styled('img')`
  height: 75px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 75px;
`;

const RotateBoxes = styled('div')`
  height: 100px;
  position: relative;
  width: 100px;

  div {
    animation: 2s cubic-bezier(0.66, -0.7, 0.27, 1.6) infinite;
    border-radius: 20%;
    height: 100px;
    margin: 0;
    mix-blend-mode: multiply;
    position: absolute;
    transform: rotate(45deg);
    width: 100px;
    -webkit-animation: 2s cubic-bezier(0.66, -0.7, 0.27, 1.6) infinite;
    -webkit-transform: rotate(45deg);

    &:nth-child(1) {
      animation-name: ${rotate1};
      background-color: var(--rotate-1);
      -webkit-animation-name: ${rotate1};
    }
    &:nth-child(2) {
      animation-name: ${rotate2};
      background-color: var(--rotate-2);
      -webkit-animation-name: ${rotate2};
    }
    &:nth-child(3) {
      animation-name: ${rotate3};
      background-color: var(--rotate-3);
      -webkit-animation-name: ${rotate3};
    }
  }
`;

export const Styles = { Img, RotateBoxes };
