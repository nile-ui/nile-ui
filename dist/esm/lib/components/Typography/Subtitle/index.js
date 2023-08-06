import { __assign, __rest } from "tslib";
import React from 'react';
import classNames from 'classnames';
var Subtitle = React.forwardRef(function (_a, ref) {
    var _b;
    var children = _a.children, fontSize = _a.fontSize, weight = _a.weight, textAlign = _a.textAlign, underline = _a.underline, lineThrough = _a.lineThrough, italic = _a.italic, lowercase = _a.lowercase, uppercase = _a.uppercase, capitalize = _a.capitalize, truncate = _a.truncate, wrap = _a.wrap, nowrap = _a.nowrap, _break = _a["break"], lineHeight = _a.lineHeight, _c = _a.color, color = _c === void 0 ? 'darkestGray' : _c, className = _a.className, otherProps = __rest(_a, ["children", "fontSize", "weight", "textAlign", "underline", "lineThrough", "italic", "lowercase", "uppercase", "capitalize", "truncate", "wrap", "nowrap", "break", "lineHeight", "color", "className"]);
    return (React.createElement("h1", __assign({ ref: ref, className: classNames('subtitle', "text-".concat(color), (_b = {
                'text-truncate': truncate,
                'text-wrap': wrap,
                'text-nowrap': nowrap,
                'text-break': _break,
                'text-lowercase': lowercase,
                'text-uppercase': uppercase,
                'text-capitalize': capitalize,
                'text-italic': italic,
                'text-underline': underline,
                'text-linethrough': lineThrough
            },
            _b["fs-".concat(fontSize)] = fontSize,
            _b["fw-".concat(weight)] = weight,
            _b["text-".concat(textAlign)] = textAlign,
            _b["line-height-".concat(lineHeight)] = lineHeight,
            _b), className) }, otherProps), children));
});
export default Subtitle;
//# sourceMappingURL=index.js.map