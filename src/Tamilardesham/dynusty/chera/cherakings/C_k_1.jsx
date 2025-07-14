import React from "react";//, { useContext, useEffect }
// import { MyContext } from "./Speek";
import { Link } from "react-router-dom";
import "./Cherakings.css";
import ck1img from "./chera-img/ck1-img1.png";
import ck1img2 from "./chera-img//ck1-img2.png";
import udiyanfamilyimg from "./chera-img/udiyanfamily.jpg";
import Navbar from "./Navbar";


function C_k_1() {
  
  // const { speakContent, stopSpeech, resumeSpeach } = useContext(MyContext);
  // useEffect(() => {
  //   return () => {
  //     // This will stop speech when the component unmounts (page change)
  //     window.speechSynthesis.cancel();
  //   };
  // }, []);
  return (
    <div className="c_k_1">
      <div className="cheradynustysubdiv"></div>
      <Navbar/>
      {/* navbar */}
      {/* <div className="chera-nav">
        <button
          id="chera-navbar_button"
          data-bs-toggle="offcanvas"
          data-bs-target="#canvas"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <h1 id="chera-headerh1">சேர வம்சம்</h1>
        <div id="chera-input-div">
          <input id="chera-nav_input" type="text" placeholder="தேடல்" />
          <button id="chera-nav_button">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div> */}
      {/* canvas start */}
      {/* <div className="offcanvas offcanvas-start" tabIndex="-1" id="canvas">
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset align-content-end "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <button><Link className="Link" to={"/"}>HOME</Link></button>
            <button onClick={speakContent}>start</button>
            <button onClick={stopSpeech}>pass</button>
          <button onClick={resumeSpeach}>resume</button>
        </div>
      </div> */}
      {/* canvas end */}

      <div className="chera-content">
        <br />
        <div id="heading-main-div">
          <div className="heading-main-div">
            <h1 className="kingname"> உத்தியன் சேரலாதன்</h1>
          </div>
          {/* name */}
        </div>
        <br />
        <div className="heading-div">
          <h3>இயர்பெயர் : </h3>
        </div>
        <p>
          உதியன் சேரலாதனின் இயர்பெயர் கிடைக்கவில்லை ஏனேனில் இது சங்க
          காலத்திலிருந்த புலவர் பாடல்களில் வந்த பெயர் என்பதால் பெரும்பாலும்
          பட்டப் பெயர் வடிவத்திலேயே காணப்படுகிறது.
        </p>
        <p>
          "உதியன்" என்பது அவரது குடிப்பெயர் அல்லது குடும்பத்தின் அடையாளமாக
          கருதப்படுகிறது. "சேரலாதன்" என்பது சேர அரச மரபின் ஒருவர் என்பதைக்
          குறிக்கும் (சேரன் + ஆதன்).
        </p>
        {/* awards */}
        <div className="heading-div">
          <h3>பட்டங்கள் : </h3>
        </div>
        <ol>
          <li>வனவன் - உயர்ந்தவன், வானத்தைப் போல உயர்ந்தவன் எனும் பொருள்.</li>
          <li>பெரும் சேரல் - மிக்க திறன் கொண்ட சேரர் என பொருள்.</li>
          <li>கடல்படையடைந்தவன் - கடல் வழியாக போர்சென்றவன் .</li>
          <li>இமயவரை மீதூர்ந்தவன் - இமயமலை வரை தனது ஆட்சியை நீட்டித்தவன்.</li>
          <li>பழமுதிர் சோழி சேரல் - பழைய சேரர் வம்சத்தைச் சேர்ந்தவன்.</li>
        </ol>
        <p>
          சேரமான் பெருஞ்சோற்று உதியஞ்சேரலாதன் சங்க காலச் சேர மன்னன். இவர்
          குட்டநாட்டைஆண்டவர். இவர் திருவஞ்சைக்களம் என்னும் கொடுங்கோளூரைத்
          தலைநகராகக் கொண்டு ஆண்டுவந்தார் என்பது ஒரு ஊகம் (கணிப்பு). இவருடைய
          மனைவியின் பெயர் நல்லினி என்றும் அவர் வெளியன் வேண்மாண் மகள் எனவும் அறிய
          முடிகிறது. உதியஞ்சேரலின் மக்கள் இமயவரம்பன் நெடுஞ்சேரலாதனும், பல்யானைச்
          செல்கெழு குட்டுவனும் ஆவர்.
          <br />
        </p>
        {/* family */}

        <div className="heading-div">
          <h3>குடும்பத்தினார் :</h3>
        </div>
        <br />
        <br />
        <center>
          <img className="family-img" src={udiyanfamilyimg} alt="" />
        </center>
        <br />
        <br />
        <div className="heading-div">
          <h3>இலக்கியக் குறிப்புகள் : </h3>
        </div>
        <p>
          பதிற்றுப்பத்து.... <br />
          <br />
          இது சேரர்களைப் பற்றி மட்டும் பாடப்பட்ட ஒரு சங்க இலக்கியத்
          தொகுப்பு.இதில் முதலாம் தொகுப்பில் உதியன் சேரலாதனைப் பற்றியே
          பாடப்பட்டுள்ளது. இந்தப் பாடல்கள் உதியன் சேரலாதனின் வீரத்தையும்,
          கொடைச்செல்வத்தையும், அவரது இறுதியையும் (வானமர்த்தல் - fasting unto
          death) பற்றி குறிப்பிடுகின்றன.
          <br />
          <br />
        </p>

        <div className="heading-div">
          <h3>பாடல் 1</h3>
        </div>
        <br />
        <i className="i-heading">
          சங்ககாலப் புலவர் மாமூலர் அகநானூற்றில் (அகம் 65),{" "}
        </i>
        <center>
          <img src={ck1img} alt="img" className="ck1img" />
        </center>
        <h4>பொருள் : </h4>
        <p>
          நடுகண் அகற்றிய உதியசேரல் என்று கூறுவதால், இவன் நாட்டை
          விரிவுபடுத்தினான் எனக் கருதுகின்றனர்.
        </p>
        <div className="heading-div">
          <h3>பாடல் 2</h3>
        </div>
        <center>
          <img src={ck1img2} alt="img" className="ck1img" />
        </center>
        <p>
          இவர் முதியோர்களைப் பேணினார் என்பதற்கு அகநானூற்றில் வரும் இப்பாடலின்
          வரிகள் வலுவூட்டுகின்றன.
        </p>
        <p>
          இது போன்ற பல தகவல்கள் உதியன்சேரலாதன்ப் பற்றி சங்க இலக்கியங்களில்
          கிடைக்கின்றன.
        </p>

        <div className="heading-div">
          <h3>கடைசி போர் :</h3>
        </div>
        <i className="i-heading">வெண்ணிப் போரில் வீரமரணம் :</i>
        <p>
          உதியன் சேரலாதன், வெண்ணிப் போரில் (மூவேந்தர் மோதல்) சோழர் மற்றும்
          பாண்டியர்களிடம் கடும் எதிர்ப்பை சந்தித்து தோல்வியுற்றார். இந்த தோல்வி
          அவரது இராணுவ பலத்தையும் ஆட்சியின் நிலைப்பாட்டையும் மிகவும் பாதித்தது.
          இது அவரது கடைசி போராக அமைந்தது. இந்த போரில் ஏற்பட்ட அவமானத்தையும்,
          தோல்வியால் ஏற்பட்ட பிழையைச் சமரசமாக மாற்ற, தோற்பின் பின்பு
          'விரதமிருந்து இறத்தல்' (fasting unto death) என்ற தர்ம வழிக்கோலத்தைத்
          தேர்ந்தெடுத்தார். இது தமிழ் மரபில் 'இடற்கை விடுதல்' அல்லது
          'விரதமிருந்து உயிர் நீத்தல்' என அழைக்கப்படுகிறது. தற்காலிகமாக உயிர்
          வாழும் உணவையும் நீத்துவிட்டு, போரில் தோல்வியடைந்ததற்கான
          மனவலிமையுடனும், பெருமையுடனும் மரணத்தைத் தழுவிய வீரன் என வரலாறு
          கூறுகிறது.
        </p>
        <p>
          வெண்ணிப் போர் என்பது மூவேந்தர்களான சேரர், சோழர், பாண்டியர்
          ஆகியோருக்கிடையே நடந்தது. மூவரும் தனித்தனியே போராடினர்.இறுதியில்
          <Link className="Link" to={"/cherakings/C_k_2"}>
            கரிகால சோழன்
          </Link>
          வெற்றி பெற்றார்.
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="chera-footer">
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

export default C_k_1;
