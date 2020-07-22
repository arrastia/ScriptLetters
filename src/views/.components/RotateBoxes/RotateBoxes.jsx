import React from 'react';

import { Styles } from './RotateBoxes.styles';

export const RotateBoxes = ({ img }) => {
  return (
    <Styles.RotateBoxes>
      <div />
      <div />
      <div />
      <Styles.Img src={img} alt="logo" />
    </Styles.RotateBoxes>
  );
};
