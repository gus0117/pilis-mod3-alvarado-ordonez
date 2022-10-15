import { createContext, useState } from "react";
//funcion obtener datos del local storage
const getDataLocalStorage = () =>{
  let array = []
  array = localStorage.getItem("locations") === null ? [] : JSON.parse(localStorage.getItem("locations"));
  return array
}

export const LocationContext = createContext({
  locationList: [],
  setLocationList: () => {}
});

export const LocationProvider = ({ children }) => {
  const [locationList, setLocationList] = useState(getDataLocalStorage);
  const value = { locationList, setLocationList };

  return (
    <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
  );
};
