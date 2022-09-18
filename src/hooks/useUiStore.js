import { useSelector } from "react-redux";
import { openSidebar, closeSidebar } from '../store';

export const useUiStore = () => {

    const { isOpen } = useSelector( sate => state.ui );

    return {
        //* Properties:
        isOpen,

        //* Reducer:
        openSidebar,
        closeSidebar,
    };
}
