import classNames from 'classnames/bind';
import styles from './PopperMenuAction.module.scss';

import Tippy from '@tippyjs/react/headless';
import Popper from '../Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from 'react';
import { faMoon, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import Button from '~/Components/ComponentSmall/Button/Button';

const cx = classNames.bind(styles);

function PopperMenuAction({ children, menuList }) {
    const [menuArray, setMenuArray] = useState([menuList]);
    const [title, setTitle] = useState('');
    const menuCurrent = menuArray[menuArray.length - 1].data;
    const showTitleBack = () => {
        return (
            <div
                className={cx('header-title')}
                onClick={() => {
                    setMenuArray(menuArray.slice(0, menuArray.length - 1));
                    setTitle(menuArray[menuArray.length - 2].type);
                }}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>{title}</span>
            </div>
        );
    };
    // eslint-disable-next-line
    const showButtonTheme = () => {
        return (
            <>
                <li className={cx('menu-item', 'border-top')}>
                    <FontAwesomeIcon icon={faMoon} />
                    <span>Chế độ tối</span>
                    <button className={cx('btn-switch')}>
                        <span className={cx('switch-icon')} />
                    </button>
                </li>
            </>
        );
    };
    const showMenu = () => {
        return menuCurrent.map((current, index) => {
            const haveChildren = !!current.children;
            const btnClick = () => {
                if (haveChildren) {
                    setMenuArray((prev) => [...prev, current.children]);
                    setTitle(current.children.type);
                } else {
                    if (current.click) {
                        current.click();
                    }
                }
            };
            const _className = current.className || '';
            return (
                <Button
                    className={_className}
                    key={index}
                    link
                    leftIcon={current.icon}
                    to={current.to}
                    href={current.href}
                    rightIcon={haveChildren && <FontAwesomeIcon icon={faChevronRight} />}
                    onClick={btnClick}
                >
                    {current.title}
                </Button>
            );
        });
    };
    const renderMenuList = () => {
        if (menuArray.length > 1) {
            return (
                <>
                    {showTitleBack()}
                    {showMenu()}
                </>
            );
        } else {
            return <>{showMenu()}</>;
        }
    };

    return (
        <Tippy
            onHide={() => {
                setMenuArray([menuList]);
            }}
            // visible
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <Popper>
                        <ul className={cx('list-menu')}>{renderMenuList()}</ul>
                    </Popper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default PopperMenuAction;
