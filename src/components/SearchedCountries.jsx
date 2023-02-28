import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CountryCard from './CountryCard';

function SearchedCountries() {
    const [searchedResults, setSearchedResults] = useState([]);
    // const [searchParams] = useSearchParams();
    // const searchQuery = Object.fromEntries([...searchParams]).country;

    const { country } = useParams();

    useEffect(() => {
        const fetchSearchCountries = async () => {
          try {
            const req = await fetch(
              `https://restcountries.com/v3.1/name/${country}`
            );
            const res = await req.json();
            setSearchedResults(res);
          } catch (err) {
            console.log(err.message);
          }
        };
    
        fetchSearchCountries();
      }, [country]);
    
      // console.log(searchedResults);

  return (
    <div style={{
      padding: '1.5rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: '15px'
    }}>
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

export default SearchedCountries