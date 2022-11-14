import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Image from '~/Components/Component/Image/Image';

const cx = classNames.bind(styles);

function AccountItem(props) {
    const _icon = <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />;
    return (
        <Link to={`/@${props.nickName}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={props.avatar} alt={props.fullName} />
            <div className={cx('info')}>
                <h4 className={cx('nick')}>
                    <span>{props.nickName}</span>
                    {props.check && _icon}
                </h4>
                <p className={cx('full-name')}>{props.fullName}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
