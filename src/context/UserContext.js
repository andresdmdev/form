import React from "react";
import { useState } from "react";

const Context = React.createContext({})

export function UserContext({ children }){

  const [userData, setUserData] = useState({})

  const [showCard, setShowCard] = useState({})

  return (
    <Context.Provider value={{ userData, setUserData, showCard, setShowCard }}>
      {children}
    </Context.Provider>
  )
}

export default Context