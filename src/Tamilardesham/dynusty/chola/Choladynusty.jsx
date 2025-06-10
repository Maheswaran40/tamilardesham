import React from "react";
import "./Chola.css";

function Choladynusty() {
  return (
    <div className="chola-main-div">
      <div className="choladynustymaindiv"></div>
      <div className="chola-nav">
        <button id="chola-navbar_button">
          <i class="fa-solid fa-bars"></i>
        </button>
        <h1 id="chola-headerh1">சேர வம்சம்</h1>
        <div id="chola-input-div">
          {" "}
          <input id="chola-nav_input" type="text" placeholder="தேடல்" />{" "}
          <button id="chola-nav_button">
            {" "}
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      {/* buttons */}
      <div id="chola-kings">
        {/* starting */}
        <h3>(கிமு 300 - கிபி 300).</h3>
        <button> கரிகால சோழன் </button>
        <br />
        <button>இளஞ்செட்சென்னி</button> <br />
        <button>நலங்கிள்ளி</button>
        <br />
        <button>கோப்பெருஞ்சோழன்</button> <br />
        <button>பெருநற்கிள்ளி</button>
        <br />
        <button>கிள்ளிவளவன்</button>
        <br />
        {/* middle */}
        <h3>மத்திய சோழர் காலம் 848 கிபி -1279 கிபி </h3>
        <button>விஜயாலய சோழன்</button>
        <br />
        <button>ஆதித்த சோழன் I</button>
        <br />
        <button> பராந்தக சோழன் I</button>
        <br />
        <button>கந்தராதித்த சோழன்</button>
        <br />
        <button>அரிஞ்சய சோழன்</button>
        <br />
        <button>சுந்தர சோழன்</button>
        <br />
        <button>ஆதித்த கரிகாலன்</button>
        <br />
        <button>இராஜராஜ சோழன் I </button>
        <br />
        <button> இராஜேந்திர சோழன் I </button>
        <br />
        <button>இராஜாதிராஜ சோழன் I</button>
        <br />
        <button>இராஜேந்திர சோழன் II</button>
        <br />
        <button> வீரராஜேந்திர சோழன்</button>
        <br />
        <button>குலோத்துங்க சோழன் I</button>
        <br />
        <button>விக்கிரம சோழன்</button>
        <br />
        <button> குலோத்துங்க சோழன் II</button>
        <br />
        <button>இராஜராஜ சோழன் II</button>
        <br />
        <button>இராஜாதிராஜ சோழன் II</button>
        <br />
        <button> குலோத்துங்க சோழன் III </button>
        <br />
        <button> இராஜராஜ சோழன் III </button>
        <br />
        <button> இராஜேந்திர சோழன் III </button>
        <br />
      </div>

      {/* footer */}
      <div className="chola-footer">
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
  );
}

export default Choladynusty;
