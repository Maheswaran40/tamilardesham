import React from 'react'
import '../homepage/Home.css'

// import Home2 from './Home2';



function Home() {
  
  return (
    <div className='home-maindiv'>
      <button id='navbar_button'><i class="fa-solid fa-bars"></i></button>
        
            <h1 id='headerh1'>தமிழர்தேசம்</h1>
       
        <div id='input-div'><input id="nav_input" type="text"placeholder='தேடல்' />  <button id='nav_button'> <i class="fa-solid fa-magnifying-glass"></i></button></div> 
    
            
    </div>
  )
}

export default Home