import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CountryCard from './CountryCard';

function SearchedContinent() {
    const [searchedResults, setSearchedResults] = useState([]);
    // const [searchParams] = useSearchParams();
    // const searchQuery = Object.fromEntries([...searchParams]).country;

    const { continent } = useParams();

    console.log(continent);

    useEffect(() => {
        const fetchSearchCountries = async () => {
          try {
            const req = await fetch(
              `https://restcountries.com/v3.1/region/${continent}`
            );
            const res = await req.json();
            setSearchedResults(res);
          } catch (err) {
            console.log(err.message);
          }
        };
    
        fetchSearchCountries();
      }, [continent]);
    
      console.log(searchedResults);

  return (
    <div style={{
      padding: '1.5rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: '15px'
    }} className="continent-grid">

        <h1>Searched Results for continent: {continent[0].toUpperCase() + continent.slice(1)}.</h1>
        {
            searchedResults.length > 0 ? searchedResults.map((item, index) => {
                return (
                    <Link to={`/country/${item.name.common.toLowerCase()}`} key={index}>
                        <CountryCard 
                            data={item}
                            sno={index}
                        />
                    </Link>
                )
            }) : <p>No countries found</p>
        }
    </div>
  )
}

export default SearchedContinent;