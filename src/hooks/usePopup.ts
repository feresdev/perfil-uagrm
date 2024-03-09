import { useState } from "react";

export const usePopup = (initialVisibility = false) => {
    const [isActivePop, setActivePop] = useState(initialVisibility);

    const handlePopup = (isActive: boolean) => {
        setActivePop(isActive);
    };

    const openPopup = (isActive: boolean) => {
        setActivePop(isActive);
    }

    return { isActivePop, openPopup, handlePopup };
};