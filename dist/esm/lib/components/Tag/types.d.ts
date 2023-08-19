/// <reference types="react" />
import { NileColor, NileSizeUpLG } from '../../uiTypes';
export interface TagProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    color?: NileColor;
    size?: NileSizeUpLG;
    flat?: boolean;
    hasClose?: boolean;
    onClose?: () => void;
}
