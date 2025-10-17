'use client';

import ReactTilt from 'react-parallax-tilt';
import { twMerge } from 'tailwind-merge';

const ImgTilt = ({  children,className, ...rest }) => {
    return (
        <ReactTilt
            trackOnWindow={true}
            tiltReverse={true}
            glareEnable={true}
            className={twMerge('shadow-2xl shadow-gray-900 w-44 md:w-[22rem] 2xl:w-[25rem]')}
            {...rest}
        >
            {children}
        </ReactTilt>
    );
};

export default ImgTilt;
