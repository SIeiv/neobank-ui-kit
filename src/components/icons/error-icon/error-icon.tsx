import type { IIcon } from '../../../types';
import icon from './Close_round_fill.svg';

export const ErrorIcon = ({ size = 24 }: IIcon) => {
    return <img style={{ width: size, height: size }} src={icon} alt="error icon" />;
};
