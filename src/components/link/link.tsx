import type { CSSProperties, ReactNode } from 'react';

import styles from './link.module.css';

export interface ILink {
    to: string;
    children?: ReactNode | ReactNode[];
    active?: boolean;
    style?: CSSProperties;
}

export const Link = ({ to, children, active = false, style }: ILink) => {
    return (
        <a style={style} className={`${styles.link} ${active && styles.active}`} href={to}>
            {children}
        </a>
    );
};
