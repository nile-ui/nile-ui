import { __assign, __rest } from "tslib";
import classNames from 'classnames';
import React from 'react';
import Body from './Body';
function Hero(_a) {
    var color = _a.color, size = _a.size, halfScreen = _a.halfScreen, fullScreen = _a.fullScreen, fullScreenWithNavbar = _a.fullScreenWithNavbar, className = _a.className, children = _a.children, otherProps = __rest(_a, ["color", "size", "halfScreen", "fullScreen", "fullScreenWithNavbar", "className", "children"]);
    return (React.createElement("div", __assign({ className: classNames('hero', color, size, {
            'half-screen': halfScreen,
            'full-screen': fullScreen,
            'full-screen-navbar': fullScreenWithNavbar
        }, className) }, otherProps), children));
}
Hero.Body = Body;
export default Hero;
//# sourceMappingURL=index.js.map