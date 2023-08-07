/// <reference types="react" />
export interface TableCellProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
    as?: 'th' | 'td';
}
