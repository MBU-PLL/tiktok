import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images/images';

import {
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

// small component
import Button from '~/Components/ComponentSmall/Button/Button';
import Popper from '~/Components/ComponentSmall/Popper/Popper';
import AccountItem from '~/Components/ComponentSmall/AccountItem/AccountItem';

import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <Popper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem nickName="datvilla94" fullName="Đạt Villa" check />
                                <AccountItem nickName="ducmom2002" fullName="Đức Mõm TV" />
                                <AccountItem nickName="duythamchannel" fullName="Duy Thẩm" check />
                                <p className={cx('search-more')}>Xem tất cả kết quả dành cho "d"</p>
                            </Popper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('search-input')}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button>
                            <FontAwesomeIcon className={cx('search-clear')} icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>
                    <FontAwesomeIcon id="popper" icon={faEllipsisVertical} className={cx('action-more')} />
                </div>
            </div>
        </header>
    );
}

export default Header;
