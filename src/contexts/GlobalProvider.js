import React, { useState } from 'react';
import { GlobalContext } from './GlobalContext';

export const GlobalProvider = ({ children }) => {
    const [contextType, setContextType] = useState(null);

    return (
        <GlobalContext.Provider value={{ contextType, setContextType }}>
            {children}
        </GlobalContext.Provider>
    );
};
