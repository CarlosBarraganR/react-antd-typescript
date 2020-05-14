import React from 'react';
import classNames from 'classnames';

import './overlay.scss';

export const Overlay = ({
  active,
  onClick
}: {
  active: boolean;
  onClick: () => void;
}) => (
  <div
    role="button"
    tabIndex={0}
    className={classNames({
      overlay: true,
      overlay_active: active
    })}
    onClick={onClick}
    onKeyUp={onClick}
  />
);
