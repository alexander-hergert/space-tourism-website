import { useContext, createContext } from "react";
import useFetchData from "./customHooks/useFetchData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { data, loading, error } = useFetchData("/data.json");
  

  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
