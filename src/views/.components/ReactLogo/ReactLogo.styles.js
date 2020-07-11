import styled, { keyframes } from 'styled-components';

const size = `100px`;

const path = keyframes`{
   from {
      transform: rotateZ(0) translateX(53px) rotateZ(0) rotateY(66deg);
    }
    to {
      transform: rotateZ(360deg) translateX(53px) rotateZ(-360deg)
        rotateY(66deg);
    }
}`;

const spin = keyframes`{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`;

const Item = styled('span')`
  border-radius: 50%;
  border: calc(var(--size) / 16) var(--react) solid;
  bottom: 0;
  height: calc(var(--ellipse) * 2);
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  transform-style: preserve-3d;
  width: calc(var(--ellipse) * 2);

  &:before {
    animation: ${path} linear infinite;
    background: var(--react);
    border-radius: 50%;
    bottom: 0;
    content: ' ';
    display: block;
    height: calc(var(--circle) * 2);
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: calc(var(--circle) * 2);
  }

  &:nth-child(1) {
    transform: rotateZ(60deg) rotateY(var(--angle));

    &:before {
      animation-duration: ${2 * 1 * 0.5}s;
    }
  }
  &:nth-child(2) {
    transform: rotateZ(120deg) rotateY(var(--angle));

    &:before {
      animation-duration: ${2 * 2 * 0.5}s;
    }
  }
  &:nth-child(3) {
    transform: rotateZ(180deg) rotateY(var(--angle));

    &:before {
      animation-duration: ${2 * 3 * 0.5}s;
    }
  }
`;

const Logo = styled('div')`
  --size: ${size};
  --ellipse: calc(var(--size) / 2);
  --circle: calc(var(--ellipse) / 10);
  --speed: 2;
  --angle: 66deg;

  animation: ${spin} infinite 15s linear;
  display: block;
  height: var(--size);
  position: relative;
  transform: rotate(180deg);
  width: var(--size);
  z-index: 1000;

  &:before {
    background-color: var(--react);
    border-radius: 50%;
    content: ' ';
    display: block;
    height: calc(var(--size) / 6);
    left: calc(50% - (var(--size) / 12) + 5px);
    position: absolute;
    top: calc(50% - (var(--size) / 12));
    width: calc(var(--size) / 6);
    z-index: 1;
  }
`;

export const Styles = { Item, Logo };
