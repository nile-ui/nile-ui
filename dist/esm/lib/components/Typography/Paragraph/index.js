import { __assign, __rest } from "tslib";
import React from 'react';
import classNames from 'classnames';
var Paragraph = React.forwardRef(function (_a, ref) {
    var _b;
    var children = _a.children, _c = _a.fontSize, fontSize = _c === void 0 ? 5 : _c, _d = _a.weight, weight = _d === void 0 ? 400 : _d, _e = _a.textAlign, textAlign = _e === void 0 ? 'left' : _e, underline = _a.underline, lineThrough = _a.lineThrough, italic = _a.italic, lowercase = _a.lowercase, uppercase = _a.uppercase, _f = _a.capitalize, capitalize = _f === void 0 ? true : _f, truncate = _a.truncate, _g = _a.wrap, wrap = _g === void 0 ? true : _g, nowrap = _a.nowrap, _h = _a["break"], _break = _h === void 0 ? true : _h, _j = _a.lineHeight, lineHeight = _j === void 0 ? 'base' : _j, _k = _a.color, color = _k === void 0 ? 'darkestGray' : _k, className = _a.className, otherProps = __rest(_a, ["children", "fontSize", "weight", "textAlign", "underline", "lineThrough", "italic", "lowercase", "uppercase", "capitalize", "truncate", "wrap", "nowrap", "break", "lineHeight", "color", "className"]);
    return (React.createElement("h1", __assign({ ref: ref, className: classNames("text-".concat(color), 'mt-2 mb-4', (_b = {
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
export default Paragraph;
//# sourceMappingURL=index.js.map