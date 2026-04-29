import { useState } from 'react';
import { Tooltip } from './tooltip';

export const WithTooltip = () => {
    const [targetElement, setTargetElement] = useState<HTMLButtonElement | null>(null);

    return (
        <div style={{ position: "relative", height: 1333 }}>
            <Tooltip open={targetElement}>TOOLTIP</Tooltip>
            <div>
                <button
                    onPointerEnter={(e) => setTargetElement(e.currentTarget)}
                    onPointerLeave={() => setTargetElement(null)}
                >
                    1
                </button>
                <button
                    onPointerEnter={(e) => setTargetElement(e.currentTarget)}
                    onPointerLeave={() => setTargetElement(null)}
                >
                    2
                </button>
                <button
                    onPointerEnter={(e) => setTargetElement(e.currentTarget)}
                    onPointerLeave={() => setTargetElement(null)}
                >
                    3
                </button>
            </div>
        </div>
    );
};
