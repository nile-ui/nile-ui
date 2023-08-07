import { __assign, __rest } from "tslib";
import React from 'react';
export default function Cell(_a) {
    var children = _a.children, _b = _a.as, as = _b === void 0 ? 'td' : _b, otherProps = __rest(_a, ["children", "as"]);
    if (as === 'td') {
        return (React.createElement("td", __assign({}, otherProps), children));
    }
    return (React.createElement("th", __assign({}, otherProps), children));
}
//# sourceMappingURL=index.js.map