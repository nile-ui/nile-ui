import { __assign, __rest } from "tslib";
import React from 'react';
import classNames from 'classnames';
export default function Row(_a) {
    var _b;
    var children = _a.children, noGap = _a.noGap, gap = _a.gap, gapX = _a.gapX, gapY = _a.gapY, _c = _a.columns, columns = _c === void 0 ? 12 : _c, smGapX = _a.smGapX, mdGapX = _a.mdGapX, lgGapX = _a.lgGapX, xlGapX = _a.xlGapX, xxlGapX = _a.xxlGapX, smGapY = _a.smGapY, mdGapY = _a.mdGapY, lgGapY = _a.lgGapY, xlGapY = _a.xlGapY, xxlGapY = _a.xxlGapY, smGap = _a.smGap, mdGap = _a.mdGap, lgGap = _a.lgGap, xlGap = _a.xlGap, xxlGap = _a.xxlGap, className = _a.className, otherProps = __rest(_a, ["children", "noGap", "gap", "gapX", "gapY", "columns", "smGapX", "mdGapX", "lgGapX", "xlGapX", "xxlGapX", "smGapY", "mdGapY", "lgGapY", "xlGapY", "xxlGapY", "smGap", "mdGap", "lgGap", "xlGap", "xxlGap", "className"]);
    return (React.createElement("div", __assign({ className: classNames('row', (_b = {
                'no-gap': noGap
            },
            _b["has-gap-".concat(gap)] = gap,
            _b["has-gap-x-".concat(gapX)] = gapX,
            _b["has-gap-y-".concat(gapY)] = gapY,
            _b["sm-has-gap-".concat(smGap)] = smGap,
            _b["md-has-gap-".concat(mdGap)] = mdGap,
            _b["lg-has-gap-".concat(lgGap)] = lgGap,
            _b["xl-has-gap-".concat(xlGap)] = xlGap,
            _b["xxl-has-gap-".concat(xxlGap)] = xxlGap,
            _b["sm-has-gap-y-".concat(smGapY)] = smGapY,
            _b["md-has-gap-y-".concat(mdGapY)] = mdGapY,
            _b["lg-has-gap-y-".concat(lgGapY)] = lgGapY,
            _b["xl-has-gap-y-".concat(xlGapY)] = xlGapY,
            _b["xxl-has-gap-y-".concat(xxlGapY)] = xxlGapY,
            _b["sm-has-gap-x-".concat(smGapX)] = smGapX,
            _b["md-has-gap-x-".concat(mdGapX)] = mdGapX,
            _b["lg-has-gap-x-".concat(lgGapX)] = lgGapX,
            _b["xl-has-gap-x-".concat(xlGapX)] = xlGapX,
            _b["xxl-has-gap-x-".concat(xxlGapX)] = xxlGapX,
            _b['has-1-column'] = columns === 1,
            _b["has-".concat(columns, "-columns")] = columns !== 1,
            _b), className) }, otherProps), children));
}
//# sourceMappingURL=index.js.map