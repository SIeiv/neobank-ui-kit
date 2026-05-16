import type { FC, InputHTMLAttributes } from 'react';
import { Paragraph } from '../paragraph';
import styles from "./checkbox.module.css";

export interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
    text?: string;
}

export const Checkbox: FC<ICheckbox> = ({ text, ...props }) => {
    return (
        <label className={styles.container}>
            <input className={`${props.className} ${styles.input}`} type="checkbox" {...props} />
            <Paragraph className={styles.text}>{text}</Paragraph>
        </label>
    );
};
