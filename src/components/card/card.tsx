import type { CSSProperties, ReactNode } from 'react';

import styles from './card.module.css';

export interface ICard {
    variation?: 'light' | 'dark';
    withShadow?: boolean;
    children?: ReactNode | ReactNode[];
    style?: CSSProperties;
}

export const Card = ({ children, style, variation = 'light', withShadow = true }: ICard) => {
    return (
        <div className={`${styles.card} ${styles[variation]} ${withShadow && styles.shadow}`} style={style}>
            {children}
        </div>
    );
};
