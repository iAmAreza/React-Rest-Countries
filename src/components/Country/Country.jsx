import React from 'react'
import './Country.css'  
import { useState } from 'react'
export default function Country({country, handleVisitedCountries,handleFlag}) {
  console.log(country) 
  const {name, capital, flags, startOfWeek} = country
  const [visited, setVisited] = useState(false)  
  const handleVisited = () => {
    setVisited(!visited)
  }
  
  return (
    <div className='country'>
      <h2>Number of country is : {name.common}</h2> 
      <h2>Name of Capital is : {capital}</h2> 
      <h2>week start with : {startOfWeek }</h2> 
      <img src={flags.png} alt="" /> 
      <p>country code : {country.cca3}</p> 
      <button onClick={() => {handleVisitedCountries(country)}}>Visited</button>  
      <br />
      <button onClick={() => {handleFlag(country.flags.png)}}>Add Flag</button>
      <p>{visited ? "I have visited this country" : "I want to visit the country"}</p>
    </div>
  )
}
