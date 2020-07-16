import React from 'react';
import PropTypes from 'prop-types';

import { Styles } from './DropdownPanel.styles';

export const DropdownPanel = ({ items, onItemClick, onToggle, style }) => (
  <Styles.Panel style={style}>
    {items.map(item => (
      <Styles.Item
        onClick={() => {
          onItemClick({ type: item.language, newLang: item.code });
          onToggle(false);
        }}>
        {item.language}
      </Styles.Item>
    ))}
  </Styles.Panel>
);

DropdownPanel.propTypes = {
  onItemClick: PropTypes.func
};

DropdownPanel.defaultProps = {
  onItemClick: () => {}
};
