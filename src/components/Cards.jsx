import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const req = await res.json();
        setData(req);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        placeItems: 'center'
    }}>
        {
            data.length > 0 && data.map((item, index) => {
                return (
                    <Link to={`/country/${item.name.common.toLowerCase()}`} key={index}>
                        <CountryCard 
                            data={item}
                            sno={index}
                        />
                    </Link>
                )
            })
        }

    </div>
  )
}

export default Cards;
