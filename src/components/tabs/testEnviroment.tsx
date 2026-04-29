import { BrowserRouter } from 'react-router-dom';
import { Tabs, type ITabs } from './tabs';
import type { FC } from 'react';

export const TestEnv: FC<ITabs> = (props) => {
    return (
        <BrowserRouter>
            <Tabs {...props} />
        </BrowserRouter>
    );
};
