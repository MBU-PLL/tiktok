import classNames from 'classnames/bind';
import styles from './MenuTree.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faE, faV, faL, faS } from '@fortawesome/free-solid-svg-icons';
import {
    IconUser,
    IconCoin,
    IconLive,
    IconFeedback,
    IconSetting,
    IconLanguage,
    IconKeyboard,
    IconLogout,
    IconMoon,
} from '../Icon/Icon';

const cx = classNames.bind(styles);

const Language = {
    type: 'Ngôn ngữ',
    data: [
        {
            icon: <FontAwesomeIcon icon={faE} />,
            code: 'en',
            title: 'English',
        },
        {
            icon: <FontAwesomeIcon icon={faV} />,
            code: 'vn',
            title: 'Tiếng Việt',
        },
    ],
};
const Keyboard = {
    type: 'Phím tắt',
    data: [
        {
            icon: <FontAwesomeIcon icon={faL} />,
            code: 'L',
            title: 'Lock',
            click: function () {
                console.log('you click me');
            },
        },
        {
            icon: <FontAwesomeIcon icon={faS} />,
            code: 'S',
            title: 'Shutdown',
        },
    ],
};
const MENU = {
    data: [
        {
            icon: <IconLanguage height="2rem" width="2rem" />,
            title: 'Tiếng Việt',
            children: Language,
        },
        {
            icon: <IconFeedback height="2rem" width="2rem" />,
            title: 'Phản hồi và trợ giúp',
            href: 'https:www.ntndesign.vn',
        },
        {
            icon: <IconKeyboard height="2rem" width="2rem" />,
            title: 'Phím tắt',
            children: Keyboard,
        },
        {
            icon: <IconMoon height="2rem" width="2rem" />,
            title: 'Chế độ tối',
            className: `${cx('btn-theme')}`,
            click: function () {
                console.log('You changed theme');
            },
        },
    ],
};
const MENU_LOGIN = {
    data: [
        {
            icon: <IconUser height="2rem" width="2rem" />,
            title: 'Xem hồ sơ',
            click: function () {
                console.log('you click ho so');
            },
        },
        {
            icon: <IconCoin height="2rem" width="2rem" />,
            title: 'Tích điểm coin',
            click: function () {
                console.log('you click coin');
            },
        },
        {
            icon: <IconLive height="2rem" width="2rem" />,
            title: 'LIVE Studio',
        },
        {
            icon: <IconSetting height="2rem" width="2rem" />,
            title: 'Cài đặt',
        },
        ...MENU.data,
        {
            icon: <IconLogout height="2rem" width="2rem" />,
            title: 'Đăng xuất',
            className: `${cx('last-item')}`,
        },
    ],
};

export { MENU, MENU_LOGIN };
