import React from 'react'
import './Mainpage.css'
import Home from './homepage/Home'
import Home_2 from './homepage/Home_2'
import Footer from './homepage/Footer'


function Mainpage() {
  return (
    <div className='mainpage-div'>
      <div className='content'>
        <Home className='home-cpn'/>
        <Home_2/>
        <Footer/>

        </div>
        
    </div>
  )
}

export default Mainpage