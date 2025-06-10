import React from 'react';
import  './Home_2.css';
import { navigate, useNavigate } from 'react-router-dom';
import warface from '../images/war-face-removebg-preview.png';

function Home_2() {
    const navigate=useNavigate();
   function cherabutton(){
    navigate('/cheradynusty');
  }
   function cholabutton(){
    
     navigate('/choladynusty');
  }
   function pandyabutton(){
    
     navigate('/pandyadynusty');
  }
   function pallavabutton(){
    
     navigate('/pallavadynusty');
  }
  return (
    <div className='home2-main-div'>
         <div id='div1'>
              
              <button onClick={cherabutton} id='buttonchera'>சேர வம்சம்</button><br />
               <button id='buttonchola'onClick={cholabutton} >சோழ வம்சம்</button>  <br />       
              <button id='buttonpandya'onClick={pandyabutton} >பாண்டிய வம்சம்</button><br />
              <button id='buttonpallava' onClick={pallavabutton}>பல்லவர் வம்சம்</button>  <br />  
             <button id='buttonmuthariyar' onClick={pallavabutton}>முத்தரையர் வம்சம்</button><br />
                 
            </div>
    </div>
  )
}

export default Home_2