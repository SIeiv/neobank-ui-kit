import { type FC } from 'react';
import styles from './overlay.module.css';
import type { IComponent, IState } from '../../types';

export interface IOverlay extends IComponent, IState<boolean> {}

export const Overlay: FC<IOverlay> = ({ activeState, setter, className, ...props }) => {

    //if (!activeState) return null;

    return (
        <div
            className={`${styles.overlay} ${activeState ? styles.showed : styles.hidden} ${className}`}
            onClick={() => {
                setter(false);
            }}
            {...props}
        ></div>
    );
};
