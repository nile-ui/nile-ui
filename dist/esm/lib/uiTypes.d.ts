export type NileColor = "primary" | "secondary" | "success" | "warning" | "error" | "info" | "dark";
export type NileGray = "gray" | "lightGray" | "darkGray" | "darkestGray";
export type NileTextColor = NileColor | NileGray;
export type NileColorWithWhite = NileColor | "white";
export type NileColorPalette = NileTextColor | NileColorWithWhite;
export type NileSizeUpMD = "md" | "lg" | "xl";
export type NileSizeDownMD = "mini" | "sm";
export type NileSize = NileSizeDownMD | NileSizeUpMD;
export type NilePosition = "top" | "right" | "bottom" | "right";
export type NileDetailedPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export type NileGridOption = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type NileOffsetOption = NileGridOption | 0;
export type NileGap = NileOffsetOption;
export interface NileConfig {
    buttonRippleEffect: boolean;
}
export type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;
