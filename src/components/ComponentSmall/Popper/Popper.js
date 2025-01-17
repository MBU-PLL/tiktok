import classNames from 'classnames/bind';
import { useEffect } from 'react';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Popper;
