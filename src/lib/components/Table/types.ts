import { NileColor } from "../../uiTypes";

export interface TableProps extends React.DetailedHTMLProps<
React.HTMLAttributes<HTMLTableElement>,
HTMLTableElement
> {
    color?: NileColor
    flat?: boolean
    striped?: boolean
    square?: boolean
    bordered?: boolean
    hoverable?: boolean
}