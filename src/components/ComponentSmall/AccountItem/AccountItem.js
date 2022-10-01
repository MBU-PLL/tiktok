import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem(props) {
    const _icon = <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />;
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_300x300.webp?x-expires=1664679600&x-signature=jBQ5P8afW3JWkX9KSwP6zcZfz6o%3D"
                alt="name"
            />
            <div className={cx('info')}>
                <h4 className={cx('nick')}>
                    <span>{props.nickName}</span>
                    {props.check && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
                </h4>
                <p className={cx('full-name')}>{props.fullName}</p>
            </div>
        </div>
    );
}

export default AccountItem;
