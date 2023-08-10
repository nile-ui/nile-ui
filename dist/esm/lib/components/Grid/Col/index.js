import React from 'react';
import classNames from 'classnames';
export default function Col(_a) {
    var _b;
    var children = _a.children, className = _a.className, size = _a.size, sizeSm = _a.sizeSm, sizeMd = _a.sizeMd, sizeLg = _a.sizeLg, sizeXl = _a.sizeXl, sizeXxl = _a.sizeXxl, offset = _a.offset, offsetSm = _a.offsetSm, offsetMd = _a.offsetMd, offsetLg = _a.offsetLg, offsetXl = _a.offsetXl, offsetXxl = _a.offsetXxl, contentWidth = _a.contentWidth, orderFirst = _a.orderFirst, orderLast = _a.orderLast;
    return (React.createElement("div", { className: classNames('column', (_b = {},
            _b["size-".concat(size)] = size,
            _b["sm-size-".concat(sizeSm)] = sizeSm,
            _b["md-size-".concat(sizeMd)] = sizeMd,
            _b["lg-size-".concat(sizeLg)] = sizeLg,
            _b["xl-size-".concat(sizeXl)] = sizeXl,
            _b["xxl-size-".concat(sizeXxl)] = sizeXxl,
            _b["has-offset-".concat(offset)] = offset,
            _b["sm-has-offset-".concat(offsetSm)] = offsetSm,
            _b["md-has-offset-".concat(offsetMd)] = offsetMd,
            _b["lg-has-offset-".concat(offsetLg)] = offsetLg,
            _b["xl-has-offset-".concat(offsetXl)] = offsetXl,
            _b["xxl-has-offset-".concat(offsetXxl)] = offsetXxl,
            _b['content-width'] = contentWidth,
            _b['order-first'] = orderFirst,
            _b['order-last'] = orderLast,
            _b), className) }, children));
}
//# sourceMappingURL=index.js.map