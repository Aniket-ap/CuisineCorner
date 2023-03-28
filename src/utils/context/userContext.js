import {createContext, useContext, useState} from "react"

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [name, setName] = useState("Aniket Pradhan")
    return(
        <UserContext.Provider value={[name, setName]}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext); 

export {useUser, UserProvider};