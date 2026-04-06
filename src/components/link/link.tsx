import styles from './link.module.css';
import { NavLink } from 'react-router-dom';
import type { IComponent } from '../../types';

export interface ILink extends IComponent {
    to: string;
    /** navlink mode requires react-router-dom library */
    tag?: 'a' | 'navlink';
    active?: boolean;
}

export const Link = ({ to, children, active = false, style, tag = 'a', className }: ILink) => {
    switch (tag) {
        case 'a': {
            return (
                <a
                    style={style}
                    rel="noopener noreferrer"
                    className={`${styles.link} ${active && styles.active} ${className}`}
                    href={to}
                >
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
