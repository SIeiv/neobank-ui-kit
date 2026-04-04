import type { IIcon } from '../../../types';
import icon from './bx_bxs-check-circle.svg';

export const CheckIcon = ({ size = 24 }: IIcon) => {
    return <img style={{ width: size, height: size }} src={icon} alt="иконка галочка на зеленом фоне" />;
};
