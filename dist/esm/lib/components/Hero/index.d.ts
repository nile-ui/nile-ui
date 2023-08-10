import React from 'react';
import { HeroProps } from './types';
declare function Hero({ color, size, halfScreen, fullScreen, fullScreenWithNavbar, className, children, ...otherProps }: HeroProps): React.JSX.Element;
declare namespace Hero {
    var Body: typeof import("./Body").default;
}
export default Hero;
