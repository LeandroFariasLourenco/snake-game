import React, { memo } from 'react';

import useIsMobile from '@Hooks/useIsMobile';
import { childrenType } from '@PropTypes/custom';

const Mobile = ({
  children,
}) => {
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && children}
    </>
  );
};

Mobile.propTypes = {
  children: childrenType.isRequired,
};

export default memo(Mobile);
