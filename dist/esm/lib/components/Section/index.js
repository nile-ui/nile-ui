import { __assign } from "tslib";
import React, { useMemo } from 'react';
import classNames from 'classnames';
import Title from '../Typography/Title';
import Container from '../Container';
export default function Section(_a) {
    var className = _a.className, children = _a.children, title = _a.title, titleProps = _a.titleProps, _b = _a.titleRef, titleRef = _b === void 0 ? null : _b, wrapTitleWithContainer = _a.wrapTitleWithContainer;
    var titleElement = useMemo(function () {
        if (!title) {
            return null;
        }
        if (typeof title === 'string') {
            return React.createElement(Title, __assign({}, titleProps, { ref: titleRef }), title);
        }
        return title;
    }, [title, titleProps, titleRef]);
    return (React.createElement("section", { className: classNames('section', className) },
        wrapTitleWithContainer ? React.createElement(Container, null, titleElement) : titleElement,
        children));
}
//# sourceMappingURL=index.js.map