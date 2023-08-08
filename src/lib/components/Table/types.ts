import { NileColor } from "../../types";

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