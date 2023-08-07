import { __assign, __rest } from "tslib";
import React from 'react';
import classNames from 'classnames';
var Text = React.forwardRef(function (_a, ref) {
    var _b;
    var children = _a.children, _c = _a.fontSize, fontSize = _c === void 0 ? 6 : _c, _d = _a.weight, weight = _d === void 0 ? 400 : _d, textAlign = _a.textAlign, underline = _a.underline, lineThrough = _a.lineThrough, italic = _a.italic, lowercase = _a.lowercase, uppercase = _a.uppercase, capitalize = _a.capitalize, truncate = _a.truncate, wrap = _a.wrap, nowrap = _a.nowrap, _break = _a["break"], _e = _a.lineHeight, lineHeight = _e === void 0 ? 'base' : _e, _f = _a.color, color = _f === void 0 ? 'darkestGray' : _f, className = _a.className, otherProps = __rest(_a, ["children", "fontSize", "weight", "textAlign", "underline", "lineThrough", "italic", "lowercase", "uppercase", "capitalize", "truncate", "wrap", "nowrap", "break", "lineHeight", "color", "className"]);
    return (React.createElement("span", __assign({ ref: ref, className: classNames("text-".concat(color), (_b = {
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
export default Text;
//# sourceMappingURL=index.js.map