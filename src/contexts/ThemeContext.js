import React from "react";

//Aca creamos el contexto
const ThemeContext = React.createContext({});

//Aca creamos y exportamos el provider
export const ThemeProvider = ThemeContext.Provider;

//Exportar el Contexto
export default ThemeContext;
