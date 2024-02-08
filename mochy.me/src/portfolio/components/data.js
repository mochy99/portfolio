import React, {createContext, useContext, useState} from 'react';

// Create a context
const MyData = createContext();

// Create a Provider
export const DataProvider = ({children}) => {
    const [data, setDate] = useState(require('../softwareEngineer.json'));
   

    return (
        <MyData.Provider value={data}>{children}</MyData.Provider>
    );
}

export const DataConsumption = () => useContext(MyData);
