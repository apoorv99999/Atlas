import { useState, useContext } from "react";
import Wrapper from "./Wrapper";
import { ThemeContext } from "../context";
import { useNavigate } from "react-router-dom";

function Forms() {
  const [country, setCountry] = useState("");
  const [, setSearchedCountries] = useState([]);
  const [region, setRegion] = useState("asia");
  const [, setSearchedRegions] = useState([]);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate();

  const searchHandler = (e) => {
    setCountry(e.target.value);
  }


  const findContinent = async(continent) => {
    try {
      const req = await fetch(`https://restcountries.com/v3.1/region/${continent.toLowerCase()}`);
      const res = await req.json();
      if(res) {
        setSearchedRegions(res);
      }
    } catch(err) {
      console.log(err.message);
    }
  }
  
  
  const changeSelectedContinent = (e) => {
    setRegion(e.target.value);
    findContinent(e.target.value);
    navigate(`/region/${region.toLowerCase()}`);
  }

  const formHandler = async(e) => {
    e.preventDefault();
    try {
      const req = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      const res = await req.json();
      if(res) {
        setSearchedCountries(res);
      }   
    } catch(err) {
      console.log(err.message);
    }

    navigate(`/search/${country}`);
  }

  // const formHandler2 = async(e) => {
  //   e.preventDefault();
  //   try {
  //     const req = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  //     const res = await req.json();
  //     if(res) {
  //       setSearchedRegions(res);
  //     }   
  //   } catch(err) {
  //     console.log(err.message);
  //   }

  //   navigate(`/region/${region}`);
  // }

  // const handleSubmit = (e) => {
  //   console.log(formRef.current);
  //   formRef.current.submit({ preventDefault: false });
  //   e.preventDefault();
  // }

  return (
    <>
      <Wrapper
        flex={true}
        justifyContent="space-between"
        alignItems="center"
        className="wrapper"
      >
        <div style={{
            display:"flex", 
            alignItems: 'center', 
            margin: "1rem 0",
            padding: '12px',
            borderRadius: '4px',
            // flexBasis: '370px'
        }} className={`${darkMode ? "element-dark" : "element-light"}`}>
            <div>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          <form onSubmit={formHandler}>
            <input 
                type="search" 
                value={country} 
                className="search" 
                placeholder="Search for your country" 
                onChange={searchHandler} 
                style={{
                    minWidth: "350px",
                }}
            />
          </form>
        </div>
        <div>
            <form>
                <select
                    style={{
                        border: 'none',
                        padding: '12px 30px',
                        borderRadius: '4px',
                        minWidth: '200px'
                    }}
                    className={`${darkMode ? "element-dark text-dark" : "element-light text-light"}`}
                    onChange={changeSelectedContinent}
                >
                    <option className={`${darkMode ? "text-dark" : "text-light"}`}>Filter By Region</option>
                    <option className={`${darkMode ? "text-dark" : "text-light"}`}>Asia</option>
                    <option className={`${darkMode ? "text-dark" : "text-light"}`}>Africa</option>
                    <option className={`${darkMode ? "text-dark" : "text-light"}`}>America</option>
                    <option className={`${darkMode ? "text-dark" : "text-light"}`}>Europe</option>
                    <option className={`${darkMode ? "text-dark" : "text-light"}`}>Ocenia</option>
                </select>
            </form>
        </div>
      </Wrapper>
    </>
  );
}

export default Forms;
