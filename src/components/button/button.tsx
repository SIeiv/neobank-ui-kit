import type { CSSProperties, ReactNode } from 'react';

import styles from './button.module.css';

interface IButton {
    variation?: 'primary' | 'secondary';
    type?: 'default' | 'flat' | 'rounded';
    children?: ReactNode | ReactNode[];
    style?: CSSProperties;
    disabled?: boolean;
}

export const Button = ({ variation = 'primary', type = 'default', disabled = false, style, children }: IButton) => {
    return (
        <button
            disabled={disabled}
            style={style}
            className={`${styles.button} ${styles[variation]} ${styles[type]} ${disabled && styles[`${variation}_disabled`]}`}
        >
            {children}
        </button>
    );
};
