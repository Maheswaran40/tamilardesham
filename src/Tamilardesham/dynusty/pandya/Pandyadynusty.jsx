import React from 'react'

import './Pandya.css'
function Pandyadynusty() {
  return (
    <div className="pandya-main-div">
    <div className='pandyadynustymaindiv'></div>
    <div className="pandya-nav">
        <button id="pandya-navbar_button">
          <i class="fa-solid fa-bars"></i>
        </button>
        <h1 id="pandya-headerh1">சேர வம்சம்</h1>
        <div id="pandya-input-div">
          <input id="pandya-nav_input" type="text" placeholder="தேடல்" />
          <button id="pandya-nav_button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    {/* buttons */}
      <div id="pandya-kings">
        {/* starting */}
        <h3>(கிமு 300 - கிபி 300).</h3>
        <button>நெடுஞ்செழியன் I</button>
        <br />
        <button>முடுகுடுமி பெருவழுதி</button> 
        <br />
        <button>நெடுஞ்செழியன் II</button>
        <br />
        <button>மரஞ்சடையன்</button> <br />
        <button>உக்கிரப் பெருவழுதி</button>
        <br />
        <button>நெடுஞ்செழியன் III</button>
        <br />
        <button>வளுடி </button>
        {/* middle */}
        <h3>மத்திய பாண்டியர் காலம் கிபி 500  - கிபி 1000  </h3>
        <br />
        <button>கடுங்கோன்</button>
        <br />
        <button> மரன் செந்தன்</button>
        <br />
        <button>அரிகேசரி மரவர்மன்</button>
        <br />
        <button>கோசடையன் இரணதீரன்</button>
        <br />
        <button>மரவர்மன் ராஜசிம்மன் I</button>
        <br />
        <button>பராந்தக நெடுஞ்சடையன்</button>
        <br />
        <button>வரகுணன் I  </button>
        <br />
        <button> வரகுணன் II </button>
        <br />


        {/* பிற்கால பாண்டியர்கள் */}
        
        <h3>பிற்கால பாண்டியர்கள்</h3>
        <button>பராக்கிரம பாண்டியன் I</button>
        <br />
        <button>சுந்தர பாண்டியன் I</button>
        <br />
        <button> சுந்தரவர்மன்</button>
        <br />
        <button>ஜதவர்மன் சுந்தர பாண்டியன் I</button>
        <br />
        <button>மாரவர்மன் சுந்தர பாண்டியன்</button>
        <br />
        <button> ஜதவர்மன் வீர பாண்டியன் I</button>
        <br />
        <button>மாரவர்மன் குலசேகர பாண்டியன் I</button>
        <br />
        <button>வீர பாண்டியன் II</button>
        <br />
        <button> சுந்தர பாண்டியன் III </button>
        <br />
        <button> 	மாற்பட்ட சிறு பாண்டிய மன்னர்கள் </button>
        <br />
        <button> பாண்டிய அரசின் வீழ்ச்சி </button>
        <br />
      </div>
      {/* footer  */}
  <div className="pandya-footer">
        <p>
          ⚠️ இந்த இணையதளத்தில் பயன்படுத்தப்படும் சில படங்கள் அடிப்படையிலானவை.
          சில படங்கள் பொது பயன்பாட்டிற்கானவையாக (Public Domain) எடுத்தவை.
          வரலாற்று தகவல்கள் தமிழ் வரலாற்று ஆய்வாளர்கள் வழங்கிய ஆதாரங்களை
          அடிப்படையாகக் கொண்டவை. இவை பொதுமக்கள் அறிவிற்கே, அதிகாரப்பூர்வ
          வரலாற்று ஆவணமாகக் கருத வேண்டாம்.
          <br />
          <span> &copy;தமிழர்தேசம்</span>
        </p>
      </div>
    </div>





 
  )
}

export default Pandyadynusty