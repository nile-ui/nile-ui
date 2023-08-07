import React from 'react';
import { TableProps } from './types';
declare function Table({ children, color, striped, bordered, square, flat, ...otherProps }: TableProps): React.JSX.Element;
declare namespace Table {
    var Head: typeof import("./Head").default;
    var Footer: typeof import("./Footer").default;
    var Row: typeof import("./Row").default;
    var Cell: typeof import("./Cell").default;
}
export default Table;
