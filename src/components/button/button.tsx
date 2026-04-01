import type { CSSProperties, ReactNode } from 'react';

import styles from './button.module.css';

interface IButton {
    variation?: 'primary' | 'secondary';
    type?: 'default' | 'flat' | 'rounded';
    children?: ReactNode | ReactNode[];
    style?: CSSProperties;
}

export const Button = ({ variation = 'primary', type = 'default', style, children }: IButton) => {
    return (
        <button style={style} className={`${styles.button} ${styles[variation]} ${styles[type]}`}>
            {children}
        </button>
    );
};
