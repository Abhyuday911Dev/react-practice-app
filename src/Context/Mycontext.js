import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);


const Mycontext = (props) => {
    const [data, setData] = useState("Dummy");

    return (
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    );
}

export default Mycontext