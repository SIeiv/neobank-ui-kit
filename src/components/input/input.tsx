import { useRef, type FC, type InputHTMLAttributes } from 'react';

import styles from './input.module.css';
import { CheckIcon } from '../icons/check-icon';
import { ErrorIcon } from '../icons/error-icon';
import { Paragraph } from '../paragraph';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    state?: 'default' | 'success' | 'error';
    errorMsg?: string;
    title?: string;
}

export const Input: FC<IInput> = ({ className, state = 'default', errorMsg, required, title, ...props }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            {title && (
                <div className={styles.titleContainer}>
                    <Paragraph style={{ marginBlock: 8 }} weight="semibold">
                        {title}
                    </Paragraph>
                    {required && (
                        <Paragraph style={{ color: '#FF5631', marginBlock: 8 }} weight="semibold">
                            *
                        </Paragraph>
                    )}
                </div>
            )}
            <div className={styles.container}>
                <input
                    ref={inputRef}
                    className={`
                    ${className} ${styles.input}
                    ${state === 'error' ? styles.error : ''}
                    ${state !== 'default' ? styles.withIcon : ''}
                `}
                    type="text"
                    required={required}
                    {...props}
                />
                <div className={styles.icon}>
                    {state === 'success' && <CheckIcon />}
                    {state === 'error' && <ErrorIcon />}
                </div>
            </div>
            {state === 'error' && errorMsg && (
                <Paragraph style={{ color: '#FF5631', margin: 0 }} weight="semibold">
                    {errorMsg}
                </Paragraph>
            )}
        </>
    );
};
