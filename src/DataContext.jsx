import React, { createContext } from 'react'
import Data from './Data';

const DataContext = createContext();

 export const DataProvider=({children})=>{

    const data = Data;
    return(
     <DataContext.Provider value={data}>
        {children}
     </DataContext.Provider>
    );
};


export default DataContext