import React, { createContext, useContext, useState} from 'react'

const stateContext = createContext();

export default function ContextProvider({children}) {
    const [activeMenu, setActiveMenu] = useState(true);
  return (
    <stateContext.Provider value={{activeMenu : activeMenu, setActiveMenu: setActiveMenu}}>
        {children}
    </stateContext.Provider>
  )
}

export const useStateContext = () =>  useContext(stateContext); 
