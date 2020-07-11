import React from 'react';
import PropTypes from 'prop-types';

import { FiExternalLink } from 'react-icons/fi';

import { Styles } from './Card.styles';

export const Card = ({ className, disabled, label, logo, onClick, redirect, style }) => {
  return (
    <Styles.Card className={className} disabled={disabled} onClick={() => onClick()} style={style}>
      <Styles.Icon>
        <FiExternalLink onClick={() => window.open(redirect)} />
      </Styles.Icon>
      {logo}
      <Styles.Label>{label}</Styles.Label>
    </Styles.Card>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  logo: PropTypes.element,
  onClick: PropTypes.func,
  redirect: PropTypes.string,
  style: PropTypes.object
};

Card.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  logo: null,
  onClick: () => {},
  redirect: '',
  style: {}
};
