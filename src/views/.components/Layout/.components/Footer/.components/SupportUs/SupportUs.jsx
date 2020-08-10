import React, { Fragment, useRef, useState } from 'react';

import { GrBitcoin, GrPaypal } from 'react-icons/gr';

import { Styles } from './SupportUs.styles';

import { Button } from 'views/.components/Button';

import { useOnClickOutside } from 'views/.tools/Hooks/useOnClickOutside';

export const SupportUs = () => {
  const [isOpened, setIsOpened] = useState(false);

  const contentRef = useRef(null);

  useOnClickOutside(contentRef, () => onCloseDonate());

  const onCloseDonate = () => setIsOpened(false);

  const onOpenDonate = () => setIsOpened(true);

  const renderDonateButtons = () => (
    <Fragment>
      <Button icon={<GrPaypal />} />
      <Button icon={<GrBitcoin />} />
      <Button icon={<GrBitcoin />} />
    </Fragment>
  );

  return (
    <Styles.SupportUs className={isOpened ? 'isOpened' : ''} onClick={() => onOpenDonate()}>
      <Styles.Content ref={contentRef}>
        <Styles.InsideContent>{renderDonateButtons()}</Styles.InsideContent>
        <Styles.OutsideContent>SUPPORT US</Styles.OutsideContent>
      </Styles.Content>
    </Styles.SupportUs>
  );
};
