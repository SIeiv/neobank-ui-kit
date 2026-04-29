import { useLayoutEffect, useRef, useState, type FC, type ReactNode } from 'react';

import styles from './tooltip.module.css';

interface IPopup {
    children?: ReactNode | ReactNode[];
    open: HTMLElement | null;
    className?: string;
}

export const Tooltip: FC<IPopup> = ({ open, children, className }) => {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    useLayoutEffect(() => {
        if (open && tooltipRef.current) {
            const oCords = open.getBoundingClientRect();

            setTooltipPosition({
                x: oCords.left,
                y: oCords.y + oCords.height + 4,
            });

            open.style.zIndex = '1';

            return () => {
                open.style.zIndex = '';
            };
        }
    }, [open]);

    return (
        <div
            className={`${styles.popup} ${className} ${open ? styles.showed : styles.hidden}`}
            onPointerDown={(e) => {
                e.stopPropagation();
            }}
            style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
            ref={tooltipRef}
        >
            {children}
        </div>
    );
};
