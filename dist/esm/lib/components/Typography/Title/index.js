import { __assign, __rest } from "tslib";
import React from 'react';
import classNames from 'classnames';
var Title = React.forwardRef(function (_a, ref) {
    var _b;
    var children = _a.children, _c = _a.variant, variant = _c === void 0 ? 3 : _c, fontSize = _a.fontSize, weight = _a.weight, textAlign = _a.textAlign, underline = _a.underline, lineThrough = _a.lineThrough, italic = _a.italic, lowercase = _a.lowercase, uppercase = _a.uppercase, capitalize = _a.capitalize, truncate = _a.truncate, wrap = _a.wrap, nowrap = _a.nowrap, _break = _a["break"], lineHeight = _a.lineHeight, _d = _a.color, color = _d === void 0 ? 'darkestGray' : _d, className = _a.className, otherProps = __rest(_a, ["children", "variant", "fontSize", "weight", "textAlign", "underline", "lineThrough", "italic", "lowercase", "uppercase", "capitalize", "truncate", "wrap", "nowrap", "break", "lineHeight", "color", "className"]);
    return (React.createElement("h1", __assign({ ref: ref, className: classNames("title-".concat(variant), "text-".concat(color), (_b = {
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
export default Title;
//# sourceMappingURL=index.js.map