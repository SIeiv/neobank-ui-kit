import type { CSSProperties, ReactNode } from "react";

export interface IComponent {
    children?: ReactNode[];
    style?: CSSProperties;
    className?: string
}

export interface IIcon {
    size?: number;
}

export interface IIconWithTheme extends IIcon {
    theme?: 'light' | 'dark';
}
