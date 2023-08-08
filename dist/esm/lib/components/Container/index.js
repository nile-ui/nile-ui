import { __assign, __rest } from "tslib";
import React from 'react';
import classNames from 'classnames';
export default function Container(_a) {
    var className = _a.className, fluid = _a.fluid, children = _a.children, otherProps = __rest(_a, ["className", "fluid", "children"]);
    return (React.createElement("div", __assign({ className: classNames('container', {
            'fluid': fluid
        }, className) }, otherProps), children));
}
//# sourceMappingURL=index.js.map