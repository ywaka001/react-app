import { createContext, useState } from "react";

export const AdminFlgContext = createContext({});

export const AdminFlgProvider = props => {

  const { children } = props;
  
  const [ isAdmin, setIsAdmin ] = useState(false);
  
  
  return(
  
    <AdminFlgContext.Provider value = { {isAdmin, setIsAdmin} }>
      { children }
    
    </AdminFlgContext.Provider>

  );
};
