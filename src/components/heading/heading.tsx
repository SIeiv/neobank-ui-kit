import styles from './heading.module.css';
import type { IComponent } from '../../types';

type AllowedTags = 'h1' | 'h2' | 'h3' | 'h4';

export interface IHeading extends IComponent {
    level: AllowedTags extends `h${infer N extends number}` ? N : never;
}

export const Heading = ({ level, children, style, className }: IHeading) => {
    const Tag: AllowedTags = `h${level}`;
    return (
        <Tag style={style} className={`${styles.heading} ${styles[Tag]} ${className}`}>
            {children}
        </Tag>
    );
};
