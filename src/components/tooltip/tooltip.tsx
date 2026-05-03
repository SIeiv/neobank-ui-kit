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
        if (!open) return;

        const updatePosition = () => {
            if (open && tooltipRef.current) {
                const containerRect = open.getBoundingClientRect();

                setTooltipPosition({
                    x: containerRect.left + window.scrollX,
                    y: containerRect.top + containerRect.height + window.scrollY,
                });
            }
        };

        updatePosition();

        window.addEventListener('scroll', updatePosition, true);
        window.addEventListener('resize', updatePosition);

        open.style.zIndex = '1';

        return () => {
            window.removeEventListener('scroll', updatePosition, true);
            window.removeEventListener('resize', updatePosition);
            open.style.zIndex = '';
        };
    }, [open]);

    return (
        <div
            className={`${styles.popup} ${className} ${open ? styles.showed : styles.hidden}`}
            onPointerDown={(e) => {
                e.stopPropagation();
            }}
            style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y,
                position: 'absolute'
            }}
            ref={tooltipRef}
        >
            {children}
        </div>
    );
};
