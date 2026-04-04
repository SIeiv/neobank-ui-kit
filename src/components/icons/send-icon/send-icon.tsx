import type { IIcon } from '../../../types';
import icon from './send-1.svg';

export const SendIcon = ({ size = 24 }: IIcon) => {
    return <img style={{ width: size, height: size }} src={icon} alt="иконка отправить" />;
};
