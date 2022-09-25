import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/Components/Component/Header/Header';
import SideBar from '~/Components/Component/SideBar/SideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar', 'm-0')}>
                    <SideBar />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
