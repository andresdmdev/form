import React from "react";
import { useState } from "react";

const Context = React.createContext({})

export function UserContext({ children }){

  const [userData, setUserData] = useState({})

  return (
    <Context.Provider value={{ userData, setUserData }}>
      {children}
    </Context.Provider>
  )
}

export default Context