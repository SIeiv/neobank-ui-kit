import type { CSSProperties, FC } from 'react';
import { DividerItem, type IDividerItem } from './divider-item';

export interface IDivider {
    items: IDividerItem[];
    style?: CSSProperties
}

export const Divider: FC<IDivider> = ({ items, style }) => {
    return (
        <div style={style}>
            {items.map((item, index) => (
                <DividerItem
                    key={`${item.title}_${item.description}`}
                    title={item.title}
                    description={item.description}
                    withUnderline={index !== items.length - 1}
                />
            ))}
        </div>
    );
};
