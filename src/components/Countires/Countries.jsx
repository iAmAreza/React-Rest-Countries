import React from 'react'
import { useEffect, useState} from 'react' 
import Country from '../Country/Country'
import './Countries.css'
export default function Countries() { 
  const [countries, setCountries] = useState([]) 
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []) 

  const [visited, setVisited] = useState([]); 
  const handleVisitedCountries = (country) => {
    console.log("This country is visited"); 
    const newVisited = [...visited, country]; 
    setVisited(newVisited);  
  } 

  const [flags, setFlags] = useState([]); 
  const handleFlag = (country) => {
    console.log("This country is visited"); 
    const newFlag = [...flags, country]; 
    setFlags(newFlag);  
  }
  return ( 
    <div>
      <h1>Number of Countires : {countries.length}</h1> 
      <h3>Flag of the visited countries </h3> 
      <div className='flag-container'>
        {
          flags.map(flag => <img src={flag} alt="" />)
        }
      </div>
      <h2>Visited : {visited.length}</h2>

          {
            visited.map(country => <li key={country.cca3}>{country.name.common}</li>)
          } 
        <div className='country-container'>
          {
            countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} handleFlag={handleFlag} country={country}></Country>)
          }
        </div>
    </div>
    
  )
}
