import { Dropdown } from 'antd';
import classNames from 'classnames';
import React from 'react';
import styles from './index.less';

const HeaderDropdown = ({ overlayClassName: cls, ...restProps }) => (
  <Dropdown
    overlayClassName={classNames(styles.container, cls)}
    getPopupContainer={(target) => target.parentElement || document.body}
    {...restProps}
  />
);

export default HeaderDropdown;
