import { __assign, __rest } from "tslib";
import classNames from 'classnames';
import React from 'react';
export default function Body(_a) {
    var children = _a.children, className = _a.className, otherProps = __rest(_a, ["children", "className"]);
    return (React.createElement("div", __assign({}, otherProps, { className: classNames('hero-body', className) }), children));
}
//# sourceMappingURL=index.js.map