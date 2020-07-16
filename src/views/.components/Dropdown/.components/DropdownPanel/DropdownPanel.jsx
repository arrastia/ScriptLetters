import React from 'react';

import { Styles } from './DropdownPanel.styles';

export const DropdownPanel = ({ items, onItemClick, onToggle, style }) => {
  return (
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
};
