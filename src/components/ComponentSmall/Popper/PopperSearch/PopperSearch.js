import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PopperSearch.module.scss';

import Tippy from '@tippyjs/react/headless';
import Popper from '../Popper';

import AccountItem from '~/Components/ComponentSmall/AccountItem/AccountItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PopperSearch() {
    // ref for input search
    const inputRef = useRef();
    // list state of component search
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    // handle
    const handleClear = () => {
        setSearchResult([]);
        setSearchValue('');
        setLoading(false);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleKeyPress = (e) => {
        if (searchValue.trim().length === 0) {
            if (e.which === 32) {
                e.preventDefault();
            }
        }
    };
    // useEffect
    useEffect(() => {
        if (searchValue.trim().length > 0) {
            setLoading(true);
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
                .then((res) => res.json())
                .then((res) => {
                    setSearchResult(res.data);
                    setLoading(false);
                });
        } else setSearchResult([]);
    }, [searchValue]);
    return (
        <Tippy
            interactive
            onClickOutside={handleHideResult}
            visible={searchResult.length > 0 && showResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <Popper>
                        <h4 className={cx('search-title')}>Tài khoản</h4>
                        {searchResult.map((itemSearch) => (
                            <AccountItem
                                avatar={itemSearch.avatar}
                                key={itemSearch.id}
                                nickName={itemSearch.nickname}
                                fullName={itemSearch.full_name}
                                check={itemSearch.tick}
                            />
                        ))}
                        <p className={cx('search-more')}>Xem tất cả kết quả dành cho "{searchValue}"</p>
                    </Popper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    className={cx('search-input')}
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                    onKeyPress={handleKeyPress}
                />
                {!!searchValue && !loading && (
                    <button onClick={handleClear}>
                        <FontAwesomeIcon className={cx('search-clear')} icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default PopperSearch;
