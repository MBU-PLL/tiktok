import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images/images';

import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
// small component
import Button from '~/Components/ComponentSmall/Button/Button';
import PopperSearch from '~/Components/ComponentSmall/Popper/PopperSearch/PopperSearch';
import PopperMenuAction from '~/Components/ComponentSmall/Popper/PopperMenuAction/PopperMenuAction';

//! import popper popup
// import PopperPopup from '~/Components/ComponentSmall/Popper/PopperPopup/PopperPopup';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Image from '../Image/Image';

import { MENU, MENU_LOGIN } from '~/Components/ComponentSmall/MenuItem/MenuTree';

import { IconSendMessage, IconMessage } from '~/Components/ComponentSmall/Icon/Icon';

const cx = classNames.bind(styles);

function Header() {
    const userLogin = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Left -> Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                {/* Center -> Search */}
                <PopperSearch />

                {/* Right -> Actions*/}
                <div className={cx('actions')}>
                    <Button className={cx('btn-upload')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    {userLogin ? (
                        // login account
                        <div className={cx('login-account')}>
                            <Tippy content="Tin nhắn">
                                {/* trigger: hiển thị tippy khi click và không tự ẩn tippy */}
                                <button className={cx('btn-account')}>
                                    <IconSendMessage className={cx('custom-icon')} height="2.6rem" width="2.6rem" />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư">
                                <button className={cx('btn-account', 'message-info')} num="12+">
                                    <IconMessage />
                                </button>
                            </Tippy>
                            <PopperMenuAction menuList={MENU_LOGIN}>
                                {/* <PopperPopup listPopup={MENU_LOGIN}> */}
                                <Image
                                    className={cx('avatar-login')}
                                    src="https://yt3.ggpht.com/yti/AJo0G0mNgiqmHMgMwg6mY9mvDnjZm6FEpEPbbqCPfoOq=s88-c-k-c0x00ffffff-no-rj-mo"
                                    height="32px"
                                    width="32px"
                                />
                                {/* </PopperPopup> */}
                            </PopperMenuAction>
                        </div>
                    ) : (
                        // actions not login
                        <>
                            <Button primary>Đăng nhập</Button>
                            <PopperMenuAction menuList={MENU}>
                                <button className={cx('action-more')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </PopperMenuAction>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
