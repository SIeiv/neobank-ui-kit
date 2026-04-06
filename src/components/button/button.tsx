import type { ButtonHTMLAttributes } from 'react';

import styles from './button.module.css';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variation?: 'primary' | 'secondary';
    border?: 'default' | 'flat' | 'rounded';
    ref?: React.Ref<HTMLButtonElement>
}

export const Button = ({
    variation = 'primary',
    border = 'default',
    disabled = false,
    ref,
    ...defaultButtonAttrs
}: IButton) => {
    return (
        <button ref={ref}
            className={`${styles.button} ${styles[variation]} ${styles[border]} ${disabled && styles[`${variation}_disabled`]}`}
            {...defaultButtonAttrs}
        ></button>
    );
};
