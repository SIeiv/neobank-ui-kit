import type { IComponent } from '../../types';
import styles from './card.module.css';

export interface ICard extends IComponent {
    variation?: 'light' | 'dark';
    withShadow?: boolean;

}

export const Card = ({ children, style, variation = 'light', withShadow = true, className }: ICard) => {
    return (
        <div className={`${styles.card} ${styles[variation]} ${withShadow && styles.shadow} ${className}`} style={style}>
            {children}
        </div>
    );
};
