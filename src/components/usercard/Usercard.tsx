import React from 'react'
import './usercard.css'
const Usercard = () => {
  return (
    <div className='countryCard'>
        <div className='countryImage'>
            <img src="http://flagcdn.com/w320/de.png" alt="" />
        </div>
        <div className='countryData'>
            <h3>Germany</h3>
            <p> <span>Population:</span>81.770.900</p>
            <p> <span>Region:</span>Europe</p>
            <p> <span>Capital:</span> Berlin</p>

        </div>
    </div>
  )
}

export default Usercard