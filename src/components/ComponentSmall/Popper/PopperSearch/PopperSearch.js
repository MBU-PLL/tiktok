import classNames from 'classnames/bind';
import styles from './PopperSearch.module.scss';

import Tippy from '@tippyjs/react/headless';
import Popper from '../Popper';

import AccountItem from '~/Components/ComponentSmall/AccountItem/AccountItem';

const cx = classNames.bind(styles);

function PopperSearch({ searchResult, children }) {
    return (
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
            {children}
        </Tippy>
    );
}

export default PopperSearch;
