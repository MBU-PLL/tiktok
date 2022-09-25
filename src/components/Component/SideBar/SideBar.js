import classNames from 'classnames/bind';
import styles from '~/Components/Component/SideBar/SideBar.module.scss';

const cx = classNames.bind(styles);
function SideBar() {
    return <aside className={cx('wrapper')}>Side bar</aside>;
}

export default SideBar;
