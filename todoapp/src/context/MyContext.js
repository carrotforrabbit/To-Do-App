import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [context, setContext] = useState([
    {
      id: 0,
      value: "qwerty",
    },
  ]);
  const values = { context, setContext };
  useEffect(() => {});

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
