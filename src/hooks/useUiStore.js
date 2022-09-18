import { useSelector } from "react-redux";

export const useUiStore = () => {
    const { openSidebar, closeSidebar } = useSelector( sate => state.ui );

    return {
        openSidebar,
        closeSidebar,
    };
}
