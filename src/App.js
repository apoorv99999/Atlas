import NavBar from "./components/NavBar";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Cards from "./components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./components/Country";
import SearchedCountries from "./components/SearchedCountries";
import SearchedContinent from "./components/SearchedContinent";

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Cards/>} />
          <Route path="/country">
            <Route path=":cname" element={<Country />} />
          </Route>
          <Route path="/search">
            <Route path=":country" element={<SearchedCountries />} />
          </Route>

          <Route path="/region">
            <Route path=":continent" element={<SearchedContinent />} />
          </Route>
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
