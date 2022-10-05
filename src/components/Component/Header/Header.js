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

import PopperSearch from '~/Components/ComponentSmall/Popper/PopperSearch/PopperSearch';
import PopperMenuAction from '~/Components/ComponentSmall/Popper/PopperMenuAction/PopperMenuAction';

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
                <PopperSearch searchResult={searchResult}>
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
                </PopperSearch>
                <div className={cx('actions')}>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>
                    <PopperMenuAction>
                        <button className={cx('action-more')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </PopperMenuAction>
                </div>
            </div>
        </header>
    );
}

export default Header;
