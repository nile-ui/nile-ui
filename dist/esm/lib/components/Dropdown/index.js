"client only";
import classNames from 'classnames';
import React, { useState } from 'react';
export default function Dropdown() {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    return (React.createElement("div", { className: classNames("dropdown", {
            'open': open
        }) },
        React.createElement("div", null,
            React.createElement("button", { onClick: function () { return setOpen(!open); }, className: "btn primary no-float has-caret" }, "Default Dropdown")),
        React.createElement("div", { className: "dropdown-content" },
            React.createElement("div", { className: "dropdown-menu" },
                React.createElement("h5", { className: "dropdown-title" }, "Simple title"),
                React.createElement("div", { className: "dropdown-item" }, "Item 1"),
                React.createElement("div", { className: "dropdown-item" }, "Item 2")))));
}
//# sourceMappingURL=index.js.map