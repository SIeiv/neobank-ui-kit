import type { CSSProperties, ReactNode } from 'react';
import styles from './heading.module.css';

type AllowedTags = 'h1' | 'h2' | 'h3' | 'h4';

interface IHeading {
    level: AllowedTags extends `h${infer N extends number}` ? N : never;
    children?: ReactNode | ReactNode[];
    style?: CSSProperties;
}

export const Heading = ({ level, children, style }: IHeading) => {
    const Tag: AllowedTags = `h${level}`;
    return (
        <Tag style={style} className={`${styles.heading} ${styles[Tag]}`}>
            {children}
        </Tag>
    );
};
