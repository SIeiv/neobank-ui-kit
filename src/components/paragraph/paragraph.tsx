import type { CSSProperties, ReactNode } from 'react';

import styles from './paragraph.module.css';

export interface IParagraph {
    size?: 'medium' | 'small' | 'large';
    weight?: 'light' | 'normal' | 'semibold' | 'bold';
    children?: ReactNode | ReactNode[];
    style?: CSSProperties;
}

export const Paragraph = ({ size = 'medium', weight = 'normal', children, style }: IParagraph) => {
    return (
        <p style={style} className={`${styles[size]} ${styles[weight]}`}>
            {children}
        </p>
    );
};
