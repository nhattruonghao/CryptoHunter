import React, {
  useContext,
  useState,
  createContext,
  useEffect,
} from "react";

const Cryto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "VND") setSymbol("đ");
  }, [currency]);

  return (
    <Cryto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Cryto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Cryto);
};
