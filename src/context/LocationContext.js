import { createContext, useState } from "react";

export const LocationContext = createContext({
  locationList: [],
  setLocationList: () => {}
});

export const LocationProvider = ({ children }) => {
  const [listLocations, setListLocations] = useState([]);
  const value = { listLocations, setListLocations };

  return (
    <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
  );
};
