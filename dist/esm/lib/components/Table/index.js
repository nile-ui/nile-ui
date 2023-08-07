import { __assign, __rest } from "tslib";
import React from 'react';
import classNames from 'classnames';
import Head from './Head';
import Footer from './Footer';
import Row from './Row';
import Cell from './Cell';
function Table(_a) {
    var children = _a.children, color = _a.color, striped = _a.striped, bordered = _a.bordered, square = _a.square, flat = _a.flat, otherProps = __rest(_a, ["children", "color", "striped", "bordered", "square", "flat"]);
    return (React.createElement("div", { className: 'has-table' },
        React.createElement("table", __assign({ className: classNames('table', color, {
                'bordered': bordered,
                'square': square,
                'striped': striped,
                'flat': flat
            }) }, otherProps), children)));
}
Table.Head = Head;
Table.Footer = Footer;
Table.Row = Row;
Table.Cell = Cell;
export default Table;
//# sourceMappingURL=index.js.map