import React, { useState, createContext} from 'react'
export const CompareContext = createContext()

export default function CompareProvider({ children }) {

    const [compareContext, setCompareContext] = useState([]);

    return (
        <CompareContext.Provider value={{compareContext, setCompareContext}}>
            {children}
        </CompareContext.Provider>
    )
}