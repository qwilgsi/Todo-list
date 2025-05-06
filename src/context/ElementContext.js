import { createContext } from "react";

export const ElementContext = createContext([]);

export default function ElementContextProvider({ value, children }) {
  return (
    <ElementContext.Provider value={value}>{children}</ElementContext.Provider>
  );
}
