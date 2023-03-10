import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";

const Crypto = createContext();

const CryptoContext = ({children}) => {
  
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");

  useEffect(()=>{
    onAuthStateChanged(auth,user => {
      if(user)
        setUser(user);
      else
        setUser(null);
    });
  },[]);

  return (
    <Crypto.Provider value={{ user,name,setName }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};