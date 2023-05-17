import { createContext, useContext, useState } from "react";

const CountryContext = createContext({
  country: "",
  setCountry: () => {},
});

export const useCountryContext = () => useContext(CountryContext);

const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState("Great Britain");

  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
