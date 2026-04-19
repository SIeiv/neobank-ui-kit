import type { IIcon } from "../../../types";
import icon from "./ring.svg";

export const LoadingIcon = ({ size = 24 }: IIcon) => {
    return <img style={{ width: size, height: size }} src={icon} alt="loading icon" />;
};
