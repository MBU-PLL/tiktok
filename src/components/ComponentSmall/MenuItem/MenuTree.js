import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA, faQuestion, faKeyboard, faE, faV, faL, faS } from '@fortawesome/free-solid-svg-icons';

const Language = {
    type: 'Language',
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
    type: 'Keyboard',
    data: [
        {
            icon: <FontAwesomeIcon icon={faL} />,
            code: 'L',
            title: 'Lock',
        },
        {
            icon: <FontAwesomeIcon icon={faS} />,
            code: 'S',
            title: 'Shutdown',
        },
    ],
};

export const MENU = {
    data: [
        {
            icon: <FontAwesomeIcon icon={faA} />,
            title: 'Tiếng Việt',
            children: Language,
        },
        {
            icon: <FontAwesomeIcon icon={faQuestion} />,
            title: 'Phản hồi và trợ giúp',
            href: 'https:www.ntndesign.vn',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Phím tắt trên bàn phím',
            children: Keyboard,
        },
    ],
};
