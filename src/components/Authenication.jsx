import React, { createContext, useContext, useState } from 'react'

const Authprovider=createContext()
const Authenication = ({children}) => {


    const [name,setName]=useState([])

    // const login=(user)=>{
    //     setUser(user)
    // }

    // const logout=()=>{
    //     setUser(null)
    // }

   
    

  return <Authprovider.Provider value={{value:[name,setName]}}>
    {children}
  </Authprovider.Provider >
}

export const useAuth=()=>{
    return useContext(Authprovider)
}
export default Authenication