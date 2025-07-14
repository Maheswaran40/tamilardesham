import React,{useState} from 'react'
import './Chera.css'
import { navigate, useNavigate } from 'react-router-dom';
// import { ClipLoader } from 'react-spinners';
import loaderimg from './cherakings/chera-img/tn-logo-removebg-preview.png'

function Cheradynusty() {
 const navigate=useNavigate();



//  navigate chera 2
function cheraKing2(){
   setLoading(true); // Show loader
    setTimeout(() => {
      navigate('/cherakings/C_k_2'); // Navigate after delay
    }, 3200); // simulate 1 sec loading
}
// loading effect  //  function chera-1()
 const [loading, setLoading] = useState(false);

  function cheraKing1() {
    setLoading(true); // Show loader
    setTimeout(() => {
      navigate('/C_k_1'); // Navigate after delay
    }, 3200); // simulate 1 sec loading
  }

 
return (
  <div className='main'>
    {/* loading effect in ternery operator */}
    {loading ? (
      <div className="loader-wrapper">
         <img src={loaderimg} alt="Chera Coin" />
      </div>
    ) : (
      <>
        <div className='cheradynustysubdiv'></div>

        <div className="chera-nav">
          <button id='chera-navbar_button'><i className="fa-solid fa-bars"></i></button>
          <h1 id='chera-headerh1'>சேர வம்சம்</h1>
          <div id='chera-input-div'>
            <input id="chera-nav_input" type="text" placeholder='தேடல்' />
            <button id='chera-nav_button'><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>

        <div id='chera-kings'><br />
          <div id="heading-main-div">
            <div className="heading-main-div"><h3 className="kingname">சங்ககாலம் முதல் நடு யுக காலம் வரை</h3></div>
          </div>

          <button onClick={cheraKing1} id='buttonchera'>உத்தியன் சேரலாதன்</button><br />
          <button onClick={cheraKing2} id='buttonchola'>நெடுஞ்சேரலாதன்</button><br />
          <button id='buttonpandya'>கடல் பிறகொட்டிய செங்குட்டுவன்</button><br />
          <button id='buttonpallava'>ஆடு கொட்டு பட்டு சேரலாதன்</button><br />
          <button id='buttonmuthariyar'>பாலை பாடிய பெருஞ்சேரல் இரும்பொரை</button><br />
          <button id='buttonmuthariyar'>செல்வக் கடும் கோ வாளியத்தன்</button><br />
          <button id='buttonmuthariyar'>மந்தரஞ்சேரல் இரும்பொரை</button><br />
          <button id='buttonmuthariyar'>கணைக்கால் இரும்பொரை</button><br />
          <button id='buttonmuthariyar'>மக வீரன் இரும்பொரை</button><br />
          <button id='buttonmuthariyar'>பெரும் கடுங்கோ</button><br />
          <button id='buttonmuthariyar'>இல்லஞ்சேரல் இரும்பொரை</button><br />
          <button id='buttonmuthariyar'>அந்துவாஞ்சேரல்</button><br />

          <div id="heading-main-div">
            <div className="heading-main-div"><h3 className="kingname">கிபி 800 - 1102</h3></div>
          </div>

          <button id='buttonmuthariyar'>ஸ்தாணு ரவி வர்மா</button><br />
          <button id='buttonmuthariyar'>இராம ராஜசேகரா</button><br />
          <button id='buttonmuthariyar'>கோட ரவி வர்மா</button><br />
          <button id='buttonmuthariyar'>இந்து கோத வர்மா</button><br />
          <button id='buttonmuthariyar'>பாஸ்கர ரவி வர்மா I</button><br />
          <button id='buttonmuthariyar'>பாஸ்கர ரவி வர்மா II</button><br />
          <button id='buttonmuthariyar'>வீர கேரளன்</button><br />
          <button id='buttonmuthariyar'>இராம குலசேகரன்</button><br />
          <button id='buttonmuthariyar'>ரவி கோத வர்மா</button><br />
          <button id='buttonmuthariyar'>கோத வர்ம மரவர்மா</button><br />
          <button id='buttonmuthariyar'>இராமதேவ குலசேகரன்</button><br />

          <div id="heading-main-div">
            <div className="heading-main-div"><h3 className="kingname">பிந்தைய சேரர்கள்</h3></div>
          </div>

          <button id='buttonmuthariyar'>பிந்தைய சேரர்கள்</button><br />
        </div>

        <div className='chera-footer'>
          <p>
            ⚠️ இந்த இணையதளத்தில் பயன்படுத்தப்படும் சில படங்கள் அடிப்படையிலானவை. சில படங்கள் பொது பயன்பாட்டிற்கானவையாக (Public Domain) எடுத்தவை. வரலாற்று தகவல்கள் தமிழ் வரலாற்று ஆய்வாளர்கள் வழங்கிய ஆதாரங்களை அடிப்படையாகக் கொண்டவை. இவை பொதுமக்கள் அறிவிற்கே, அதிகாரப்பூர்வ வரலாற்று ஆவணமாகக் கருத வேண்டாம்.
            <br /><span>&copy;தமிழர்தேசம்</span>
          </p>
        </div>
      </>
    )}
  </div>
);
}

export default Cheradynusty