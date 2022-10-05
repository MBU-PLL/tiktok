import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = forwardRef((props, ref) => {
    let Comp = 'button';
    const {
        className,
        primary,
        outline,
        link,
        small,
        large,
        rounded,
        disable,
        to,
        href,
        leftIcon,
        rightIcon,
        onClick,
        children,
        ..._props
    } = props;
    const PROPS = { onClick, ..._props };
    // ! disable button
    // * không thể thay đổi được props từ cha đưa vào nên phải chuyển qua PROPS trung gian để thay đổi rồi sau đó truyền PROPS trung gian vào component của mình
    if (disable) {
        Object.keys(PROPS).forEach((key) => {
            if (key.startsWith('on') && typeof PROPS[key] === 'function') {
                delete PROPS[key];
            }
        });
    }
    //! change Link or 'a' when insert to or href
    if (to) {
        Comp = Link;
        PROPS.to = to;
    } else if (href) {
        Comp = 'a';
        PROPS.href = href;
    }
    //! config classname for Button Custom
    // * classname nếu có classname thì sẽ lấy chữ classname làm giá trị
    // * [classname]: classname là nếu có classname sẽ lấy giá trị của classname đó
    const classes = cx('btn', {
        [className]: className,
        primary,
        outline,
        link,
        small,
        large,
        rounded,
        disable,
    });
    // ! render component
    return (
        <Comp ref={ref} className={classes} {...PROPS}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
});

export default Button;
