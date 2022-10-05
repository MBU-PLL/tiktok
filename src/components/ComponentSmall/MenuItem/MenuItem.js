import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';

import Button from '~/Components/ComponentSmall/Button/Button';

const cx = classNames.bind(styles);

function MenuItem({ className, to, href, leftIcon, rightIcon, ...props }) {
    return (
        <Button
            className={cx({ className })}
            to={to}
            href={href}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            {...props}
        ></Button>
    );
}

export default MenuItem;
