import { useContext } from "react";
import { ThemeContext } from "../context";

function CountryCard(props) {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`card ${darkMode ? "element-dark" : "element-light"}`}>
        <div>
            <img src={props.data.flags.svg} alt={props.data.name.common} width="240"   />
        </div>

        <div style={{
            flex: 1,
            minWidth: '240px',
            padding: '20px',
            color: 'white',
            textDecoration: 'none',
            listStyleType: 'none'
        }} className={`${darkMode ? "element-dark" : "element-light"}`}>
            <h2 className={`${darkMode ? "text-dark" : "text-light"}`}>{props.data.name.official}</h2>
            <p className={`${darkMode ? "text-dark" : "text-light"}`}>Population: {props.data.population}</p>
            <p className={`${darkMode ? "text-dark" : "text-light"}`}>Region: {props.data.region}</p>
            <div style={{
                display: 'flex'
            }}><p className={`${darkMode ? "text-dark" : "text-light"}`}>Capital: </p>
                {
                    props.data.capital && props.data.capital.map((item, index) => {
                        return (
                            <p key={index} className={`${darkMode ? "text-dark" : "text-light"}`}>{item}</p>
                        )
                    })
                }

            </div>
            
        </div>
    </div>
  )
}

export default CountryCard