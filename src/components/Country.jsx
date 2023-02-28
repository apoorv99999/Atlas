import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Wrapper from './Wrapper';

function Country() {
  const [country, setCountry] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);

  const countryName = useParams();

  useEffect(() => {
    const fetchCountry = async() => {
        try {
            const req = await fetch(`https://restcountries.com/v3.1/name/${countryName.cname}`);
            const res = await req.json();
            if(res) {
                setCountry(res[0]);
                setCurrencies(Object.values(res[0].currencies));
                setLanguages(Object.values(res[0].languages));
                setBorderCountries(res[0].borders);
            }
        } catch(err) {
            console.log(err.message);
        }
    }

    fetchCountry();
  }, [countryName.cname]);

  useEffect(() => {
    async function fetchCountriesByCode() {
        try {
            let bordersArr = [];
            const res2 = borderCountries.map((item, index) => {
                const req = fetch(`https://restcountries.com/v3.1/alpha/${item}`).then((res) => {
                    const resJson = res.json().then(res => {
                        return res;
                    });
                    return resJson;
                }).catch(err => {
                    console.log(err.message);
                })

                return req;
            });

        } catch(err) {
            console.log(err.message);
        }
    }

    fetchCountriesByCode();
  }, [borderCountries]);

  return (
    <Wrapper>
        <div className='back-btn-container'>
            <Link to="/">
                <i className="fa-solid fa-arrow-left"></i>
                <span>Back</span>
            </Link>
        </div>
        {
            Object.keys(country).length === 0 === {} ? 'Loading...' : 
        <div style={{
            display: 'flex'
        }}>
            <div style={{
                margin: "1rem 0",
                flex: 1
            }}>
                <img src={country?.flags?.svg} alt={country?.name?.common} height="500px" />
            </div>
            <div className='info-section'>
                <h2>{country?.name?.common}</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                }}> 
                    <p style={{ flex: 2 }}>Native Name: {country?.name?.official}</p>
                    <p style={{ flex: 1 }}>Top Level Domain: {Object.keys(country).length > 0 ? country?.tld.map((item, index) => {
                      return (
                        <span key={index}>{item}, </span>
                      )  
                    }): 'No map'}</p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                }}> 
                    <p style={{ flex: 2 }}>Population: {country?.population}</p>
                    <p style={{ flex: 1 }}>Currencies: {Object.keys(country).length > 0 ? currencies.map((item, index) => {
                        return (
                            <span key={index}>
                                {item.name}  
                            </span>
                        )
                    }) : 'no currencies found'}</p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                }}> 
                    <p style={{ flex: 2 }}>Region: {country?.region}</p>
                    <p style={{ flex: 1 }}>Languages: {Object.keys(country).length > 0 ? languages.map((item, index) => {
                        return (
                            <span key={index}>
                                {item},   
                            </span>
                        )
                    }) : 'no languages found'}</p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    Sub Region: {country?.subregion}
                </div>

                <div>
                    { Object.keys(country).length > 0 ? country.capital.map((item, index) => {
                        return (
                            <p key={index}>Capital: {item} </p>
                        )
                    }) : 'No capitals found'

                    }
                </div>

                <div>

                </div>
            </div>
        </div>
        }
    </Wrapper>
  )
}

export default Country