import React, { useRef, useState } from 'react';
import { useSpring } from 'react-spring';

import { Styles } from './Dropdown.styles';

import { DropdownPanel } from './.components/DropdownPanel';

import { useOnClickOutside } from 'views/.tools/Hooks/useOnClickOutside';

export const Dropdown = ({ icon, items, label, panelStyle, onClick, onItemClick, style }) => {
  const [isToggled, setToggle] = useState(false);

  const ref = useRef(null);

  useOnClickOutside(ref, () => setToggle(false));

  const menuBg = useSpring({ background: isToggled ? '#61dafb' : '#ebebeb' });
  const { y } = useSpring({ y: isToggled ? 360 : 0 });
  const menuAppear = useSpring({ transform: isToggled ? 'translate3D(0,0,0)' : 'translate3D(0,-40px,0)', opacity: isToggled ? 1 : 0 });

  const onToggleDropdown = value => setToggle(value);

  return (
    <Styles.Dropdown ref={ref}>
      <Styles.RadioWrapper onClick={() => onToggleDropdown(!isToggled)} style={menuBg}>
        <Styles.Radio>
          <p>{label}</p>
          {/* <Styles.Icon style={{ transform: y.interpolate(y => `rotateX(${y}deg)`) }}>{icon}</Styles.Icon> */}
        </Styles.Radio>
      </Styles.RadioWrapper>
      <Styles.MenuPanel style={menuAppear}>
        {isToggled ? <DropdownPanel items={items} onItemClick={onItemClick} onToggle={onToggleDropdown} style={panelStyle} /> : null}
      </Styles.MenuPanel>
    </Styles.Dropdown>
  );
};
