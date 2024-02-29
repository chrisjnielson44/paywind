'use client'
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationPath, style }: { animationPath: string, style: React.CSSProperties }) => {
    const animationContainer = useRef<HTMLDivElement | null>(null);

useEffect(() => {
    const animation = lottie.loadAnimation({
        container: animationContainer.current!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath,
    });

    return () => animation.destroy();
}, [animationPath]);

return <div ref={animationContainer} style={style}></div>;
};

export default LottieAnimation;