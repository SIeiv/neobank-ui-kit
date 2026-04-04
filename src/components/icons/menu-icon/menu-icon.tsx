import type { IIconWithTheme } from '../../../types';
import iconDark from './burger-menu-dark.svg';
import iconLight from './burger-menu-light.svg';

export const MenuIcon = ({ theme = 'light', size = 24 }: IIconWithTheme) => {
    const iconSelector = () => {
        switch (theme) {
            case 'light':
                return iconLight;
            case 'dark':
                return iconDark;
            default: {
                const _exhaustiveCheck: never = theme;
                return _exhaustiveCheck;
            }
        }
    };
    return <img style={{ width: size, height: size }} src={iconSelector()} alt="иконка меню" />;
};
