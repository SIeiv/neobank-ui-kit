import type { FC, SelectHTMLAttributes } from 'react';
import styles from './select.module.css';

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string; text: string }[];
}

export const Select: FC<ISelect> = ({ className, options, ...props }) => {
    return (
        <select className={`${className} ${styles.select}`} {...props}>
            {options.map((item) => (
                <option className={styles.option} value={item.value}>{item.text}</option>
            ))}
        </select>
    );
};
