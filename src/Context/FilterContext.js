import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const IdContext = createContext();
const IdProvider = ({ children }) => {
  const [Id, setId] = useState("");
  
  useEffect(() => {
       setId("")
  }, []);
  return (
    <IdContext.Provider value={[Id, setId]}>
      {children}
    </IdContext.Provider>
  );
};

// custom hook
const useId = () => useContext(IdContext);

export { useId, IdProvider };