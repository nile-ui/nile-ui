/// <reference types="react" />
export interface TableCellProps extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    as?: 'th' | 'td';
}
