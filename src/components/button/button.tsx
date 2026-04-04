import type { ButtonHTMLAttributes } from 'react';

import styles from './button.module.css';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variation?: 'primary' | 'secondary';
    border?: 'default' | 'flat' | 'rounded';
}

export const Button = ({
    variation = 'primary',
    border = 'default',
    disabled = false,
    ...defaultButtonAttrs
}: IButton) => {
    return (
        <button
            className={`${styles.button} ${styles[variation]} ${styles[border]} ${disabled && styles[`${variation}_disabled`]}`}
            {...defaultButtonAttrs}
        ></button>
    );
};
