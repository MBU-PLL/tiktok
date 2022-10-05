import classNames from 'classnames/bind';
import styles from './PopperMenuAction.module.scss';

import Tippy from '@tippyjs/react/headless';
import Popper from '../Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState } from 'react';
import { faMoon, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import Button from '~/Components/ComponentSmall/Button/Button';
import { MENU } from '~/Components/ComponentSmall/MenuItem/MenuTree';

const cx = classNames.bind(styles);

function PopperMenuAction({ children }) {
    const [menuArray, setMenuArray] = useState([MENU]);
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
    const renderMenuTree = () => {
        if (menuArray.length > 1) {
            return (
                <>
                    {showTitleBack()}
                    {renderMenu()}
                </>
            );
        } else {
            return renderMenu();
        }
    };
    const renderMenu = () => {
        return menuCurrent.map((current, index) => {
            const haveChildren = !!current.children;
            const btnClick = () => {
                if (haveChildren) {
                    setMenuArray((prev) => [...prev, current.children]);
                    setTitle(current.children.type);
                }
            };
            return (
                <Button
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
    return (
        <Tippy
            onHide={() => {
                setMenuArray([MENU]);
            }}
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <Popper>
                        <ul className={cx('list-menu')}>
                            {renderMenuTree()}
                            {menuArray.length < 2 && (
                                <li className={cx('menu-item')}>
                                    <FontAwesomeIcon icon={faMoon} />
                                    <span>Chế độ tối</span>
                                    <button className={cx('btn-switch')}>
                                        <span className={cx('switch-icon')} />
                                    </button>
                                </li>
                            )}
                        </ul>
                    </Popper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default PopperMenuAction;
