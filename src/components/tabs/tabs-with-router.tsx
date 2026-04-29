import { BrowserRouter } from 'react-router-dom';
import { TabsInner, type ITabs } from './tabs';
import type { FC } from 'react';

export const Tabs: FC<ITabs> = (props) => {
    return (
        <BrowserRouter>
            <TabsInner {...props} />
        </BrowserRouter>
    );
};
