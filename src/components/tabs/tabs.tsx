import { useEffect, useRef, useState, type CSSProperties, type FC, type MouseEventHandler } from 'react';
import styles from './tabs.module.css';
import type { Link } from '../../types';
import { NavLink, useLocation } from 'react-router-dom';

export interface ITabs {
    links: Link[];
    style?: CSSProperties;
}

export const Tabs: FC<ITabs> = ({ links }) => {
    const location = useLocation();

    const linksRef = useRef<HTMLDivElement>(null);
    let initialIndicator: number = -1;
    links.forEach((link, index) => {
        if (link.to === location.pathname) {
            initialIndicator = index;
            return;
        }
    });

    const [indicatorProperties, setIndicatorProperties] = useState({ x: 0, y: 0, width: 100 });

    const handleOnClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
        const cords = e.currentTarget.getBoundingClientRect();
        setIndicatorProperties({ x: cords.left - 16, y: cords.top + cords.height, width: cords.width + 32 });
    };

    useEffect(() => {
        if (linksRef.current) {
            const initialIndex = links.findIndex(link => link.to === location.pathname);

            if (initialIndex !== -1) {
                const activeLink = linksRef.current.childNodes[initialIndex] as HTMLAnchorElement;

                if (activeLink) {
                    const cords = activeLink.getBoundingClientRect();
                    setIndicatorProperties({
                        x: cords.left - 16,
                        y: cords.top + cords.height,
                        width: cords.width + 32
                    });
                }
            }
        }
    }, [links, location.pathname]);

    return (
        <nav className={styles.nav}>
            <div className={styles.links} ref={linksRef}>
                {links.map((link) => (
                    <NavLink
                        onClick={handleOnClick}
                        className={styles.link}
                        key={`${link.text}_${link.to}`}
                        to={link.to}
                    >
                        {link.text}
                    </NavLink>
                ))}
            </div>
            <div>
                <div className={styles.path}></div>
                <div
                    style={{
                        left: indicatorProperties.x,
                        top: indicatorProperties.y,
                        width: indicatorProperties.width,
                    }}
                    className={styles.indicator}
                ></div>
            </div>
        </nav>
    );
};
