import { __assign, __rest } from "tslib";
import React, { forwardRef } from 'react';
import classNames from 'classnames';
var Button = forwardRef(function (_a, ref) {
    var className = _a.className, color = _a.color, _b = _a.size, size = _b === void 0 ? "md" : _b, bordered = _a.bordered, children = _a.children, flat = _a.flat, square = _a.square, pill = _a.pill, block = _a.block, loading = _a.loading, floating = _a.floating, noFloat = _a.noFloat, link = _a.link, buttonProps = __rest(_a, ["className", "color", "size", "bordered", "children", "flat", "square", "pill", "block", "loading", "floating", "noFloat", "link"]);
    return (React.createElement("button", __assign({ ref: ref, className: classNames('btn', color, size, {
            'square': square,
            'bordered': bordered,
            'block': block,
            'flat': flat,
            'pill': pill,
            'floating': floating,
            'no-float': noFloat,
            'link': link,
            'loading': loading
        }, className) }, buttonProps), children));
});
export default Button;
//# sourceMappingURL=index.js.map