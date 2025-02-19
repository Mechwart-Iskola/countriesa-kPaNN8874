import React from 'react'
import AllCountries from './pages/allcountries/AllCountries'
import Usercard from './components/usercard/Usercard'
import './index.css';
import './components/usercard/usercard.css'
const App = () => {
  return (
    <div>
      <AllCountries></AllCountries>
      <Usercard></Usercard>
    </div>
    
  )
}

export default App