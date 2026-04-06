import styles from './paragraph.module.css';
import type { IComponent } from '../../types';

export interface IParagraph extends IComponent {
    size?: 'medium' | 'small' | 'large';
    weight?: 'light' | 'normal' | 'semibold' | 'bold';
}

export const Paragraph = ({ size = 'medium', weight = 'normal', children, style, className }: IParagraph) => {
    return (
        <p style={style} className={`${styles[size]} ${styles[weight]} ${className}`}>
            {children}
        </p>
    );
};
