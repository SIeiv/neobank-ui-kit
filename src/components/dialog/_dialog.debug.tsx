import { useState } from 'react';
import { Dialog } from './dialog';

export const DialogDebug = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <button
                onClick={() => {
                    setIsActive(true);
                }}
            >
                Show
            </button>
            <Dialog
                header="Deny application
"
                activeState={isActive}
                setter={setIsActive}
            ></Dialog>
        </div>
    );
};
