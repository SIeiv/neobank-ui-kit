import type { IIconWithTheme } from '../../../types';

import leftLight from './Transfer_long_left_light.svg';
import leftDark from './Transfer_long_left_dark.svg';
import rightLight from './Transfer_long_right_light.svg';
import rightDark from './Transfer_long_right_dark.svg';

export interface IArrowIcon extends IIconWithTheme {
    direction: 'left' | 'right';
}

export const ArrowIcon = ({ size = 24, theme = 'light', direction }: IArrowIcon) => {
    const iconThemeSelector = (): [string, string] => {
        switch (theme) {
            case 'light':
                return [leftLight, rightLight];
            case 'dark':
                return [leftDark, rightDark];
            default: {
                const _exhaustiveCheck: never = theme;
                return _exhaustiveCheck;
            }
        }
    };

    const iconDirectionSelector = (selectedTheme: [string, string]): string => {
        switch (direction) {
            case 'left':
                return selectedTheme[0];
            case 'right':
                return selectedTheme[1];
            default: {
                const _exhaustiveCheck: never = direction;
                return _exhaustiveCheck;
            }
        }
    };

    return <img style={{ width: size, height: size }} src={iconDirectionSelector(iconThemeSelector())} alt="стрелка" />;
};
