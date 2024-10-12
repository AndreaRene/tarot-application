import { createContext, useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { ThemeContext } from '../Settings/ThemeContext';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const { loading: userLoading } = useContext();
    const { loading: themeLoading } = useContext(ThemeContext);
    const [globalLoading, setGlobalLoading] = useState(true);

    const [getUserData] = useLazyQuery(GET_USER_DATA);

    useEffect(() => {
        // When both user and theme data are done loading, globalLoading is set to false
        if (!userLoading && !themeLoading) {
            setGlobalLoading(false);
        } else {
            setGlobalLoading(true);
        }
    }, [userLoading, themeLoading]);

    return <GlobalContext.Provider value={{ globalLoading }}>{children}</GlobalContext.Provider>;
};
