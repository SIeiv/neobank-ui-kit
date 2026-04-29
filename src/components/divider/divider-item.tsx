import type { FC } from 'react';

import styles from "./divider.module.css";
import { Paragraph } from '../paragraph';

export interface IDividerItem {
    title: string;
    description: string;
}

export const DividerItem: FC<IDividerItem & { withUnderline: boolean }> = ({ description, title, withUnderline }) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.itemMain}>
                <Paragraph style={{width: 326}} weight='semibold'>{title}</Paragraph>
                <Paragraph style={{color: "#434343"}}>{description}</Paragraph>
            </div>
            {withUnderline && <hr />}
        </div>
    );
};
