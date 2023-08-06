import React from 'react';
import classNames from 'classnames';
export default function Container(_a) {
    var className = _a.className, fluid = _a.fluid, children = _a.children;
    return (React.createElement("div", { className: classNames('container', {
            'fluid': fluid
        }, className) }, children));
}
//# sourceMappingURL=index.js.map