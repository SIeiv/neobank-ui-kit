import type { IIcon } from '../../../types';
import icon from './email-1.svg';

export const EmailIcon = ({ size = 24 }: IIcon) => {
    return <img style={{ width: size, height: size }} src={icon} alt="иконка электронной почты" />;
};
