import type { FC } from 'react';
import type { IComponent, IState } from '../../types';
import { Overlay } from '../overlay';
import styles from './drawer.module.css';

export interface IDrawer extends IComponent, IState<boolean> {}

export const Drawer: FC<IDrawer> = ({ activeState, setter, className, ...props }) => {
    return (
        <>
            <Overlay activeState={activeState} setter={setter}></Overlay>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={`${styles.drawer} ${activeState ? styles.showed : styles.hidden} ${className}`}
                {...props}
            ></div>
        </>
    );
};
