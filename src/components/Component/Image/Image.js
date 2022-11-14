import classNames from 'classnames/bind';
import { useState, forwardRef } from 'react';
import style from './Image.module.scss';
import images from '~/assets/images/images';

const cx = classNames.bind(style);

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };
    return (
        <img
            ref={ref}
            className={cx('image', { [className]: className })}
            alt={alt}
            src={fallback || src}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
