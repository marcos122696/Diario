import { useSelector } from "react-redux";
import { openSidebar, closeSidebar } from '../store';

export const useUiStore = () => {

    const { isOpen } = useSelector( state => state.ui );

    const nameCapitalize = ( displayName ) => {
        const newName = displayName[0].toUpperCase() + displayName.slice(1);

        return newName
    };

    return {
        //* Properties:
        isOpen,
        nameCapitalize,

        //* Methods:

        //* Reducer:
        openSidebar,
        closeSidebar,
    };
}
