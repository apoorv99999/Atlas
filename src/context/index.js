import { createContext, useReducer } from "react";
import themeReducer from "./themesContext";

const initialState = {
  darkMode: false
};

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
