import { useContext } from "react";
import { ThemeContext } from "../context";
import Forms from "./Forms";
import Wrapper from './Wrapper';

function NavBar() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

   const changeMode = (e) => {
    if (darkMode) {
        theme.dispatch({ type: "LIGHTMODE" });
      } else {
        theme.dispatch({ type: "DARKMODE" });
      }
   }

  return (
    <>
        <div className={`${darkMode ? "element-dark" : "element-light"}`}>
            <Wrapper paddingY="1rem" flex={true} justifyContent="space-between" alignItems="center">
                <h1 className={`${darkMode ? "text-dark" : "text-light"}`}>Where In the world?</h1>
                <button className="btn-mode" onClick={changeMode}>
                    <i className={`fa-solid fa-moon ${darkMode ? "text-dark" : "text-light"}`}></i>
                    <span className={`${darkMode ? "text-dark" : "text-light"}`}>Dark Mode</span>
                </button>
            </Wrapper>
        </div>
    
        <Forms />
    </>
  )
}

export default NavBar