import classNames from 'classnames/bind';
import styles from './PopperPopup.module.scss';

import Tippy from '@tippyjs/react/headless';
import Popper from '~/Components/ComponentSmall/Popper/Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

const popupItemOnClick = (item, setListData) => {
    if (item.children) {
        setListData((prev) => [...prev, item.children]);
    } else if (item.click) {
        item.click();
    }
};

const PopupItem = ({ popupItem, setListData, className }) => (
    <li
        className={cx('popup-item')}
        onClick={() => {
            popupItemOnClick(popupItem, setListData);
        }}
    >
        {popupItem.children ? (
            <>
                <span className={cx('popup-item-svg')}>{popupItem.icon}</span>
                <span className={cx('popup-item-title')}>{popupItem.title}</span>
                <span className={cx('popup-item-next')}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </>
        ) : (
            <>
                <span className={cx('popup-item-svg')}>{popupItem.icon}</span>
                <span className={cx('popup-item-title')}>{popupItem.title}</span>
            </>
        )}
    </li>
);
const PopperPopup = ({ children, listPopup }) => {
    const [listData, setListData] = useState([listPopup]);
    return (
        <Tippy
            visible
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <Popper>
                        <ul>
                            {listData[listData.length - 1].data.map((popup, index) => (
                                <PopupItem
                                    popupItem={popup}
                                    key={index}
                                    setListData={setListData}
                                    classNames={popup.className}
                                />
                            ))}
                        </ul>
                    </Popper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default PopperPopup;
