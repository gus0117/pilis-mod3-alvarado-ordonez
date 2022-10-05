import { createContext, useState } from "react";

export const LocationContext = createContext({
  locationList: [],
  setLocationList: () => {}
});

export const LocationProvider = ({ children }) => {
  const [locationList, setLocationList] = useState([]);
  const value = { locationList, setLocationList };

  return (
    <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
  );
};
