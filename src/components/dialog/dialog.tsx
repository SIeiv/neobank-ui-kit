import type { FC } from 'react';
import type { IComponent, IState } from '../../types';
import { Overlay } from '../overlay';
import styles from './dialog.module.css';
import { Paragraph } from '../paragraph';

import exitIcon from './Close_square.svg';

export interface IDialog extends IComponent, IState<boolean> {
    header?: string;
}

export const Dialog: FC<IDialog> = ({ activeState, setter, className, header, children, ...props }) => {
    return (
        <>
            <Overlay activeState={activeState} setter={setter}></Overlay>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={`${className} ${styles.dialog} ${activeState ? styles.showed : styles.hidden}`}
                {...props}
            >
                <div className={styles.header}>
                    <Paragraph style={{margin: 0}} weight="bold">{header}</Paragraph>
                    <button className={styles.exitBtn} onClick={() => setter(false)}>
                        <img src={exitIcon} alt="exit" />
                    </button>
                </div>
                {children}
            </div>
        </>
    );
};
