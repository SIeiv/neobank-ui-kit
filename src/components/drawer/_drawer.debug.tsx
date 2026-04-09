import { useState } from "react";
import { Drawer } from "./drawer";
import { Button } from "../button";

export const DrawerDebug = () => {
    const [isActive, setIsActive] = useState(false);

    return ( <div>
        <button onClick={() => {setIsActive(true)}}>Show</button>
        <Drawer activeState={isActive} setter={setIsActive}>
            <Button onClick={() => {setIsActive(false)}}>EXIT</Button>
        </Drawer>
    </div> );
}
