import React, { createContext, useContext, useState, useEffect} from 'react';
import { db } from '../firebase'
import { ref, onValue } from 'firebase/database';

const stateContext = createContext();

export default function ContextProvider({children}) {
    const [activeMenu, setActiveMenu] = useState(true);
    const [datas, setDatas] = useState([]);
    useEffect(() => {
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        
        if(data !== null){
          
            setDatas([data]);
            console.log(data);
        }
      });
    }, [])
  return (
    <stateContext.Provider value={{activeMenu : activeMenu, setActiveMenu: setActiveMenu, datas: datas, setDatas: setDatas}}>
        {children}
    </stateContext.Provider>
  )
}

export const useStateContext = () =>  useContext(stateContext); 
