export interface IIcon {
    size?: number;
}

export interface IIconWithTheme extends IIcon {
    theme?: 'light' | 'dark';
}
