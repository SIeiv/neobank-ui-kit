import type { CSSProperties, ReactNode } from 'react';

import styles from './link.module.css';
import { NavLink } from 'react-router-dom';

export interface ILink {
    to: string;
    /** navlink mode requires react-router-dom library */
    tag?: 'a' | 'navlink';
    children?: ReactNode | ReactNode[];
    active?: boolean;
    style?: CSSProperties;
}

export const Link = ({ to, children, active = false, style, tag = 'a' }: ILink) => {
    switch (tag) {
        case 'a': {
            return (
                <a style={style} className={`${styles.link} ${active && styles.active}`} href={to}>
                    {children}
                </a>
            );
        }
        case 'navlink': {
            return (
                <NavLink style={style} className={`${styles.link} ${active && styles.active}`} to={to}>
                    {children}
                </NavLink>
            );
        }
        default: {
            const _exhaustiveCheck: never = tag;
            return _exhaustiveCheck;
        }
    }
};
