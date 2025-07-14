import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import { MyContext } from "./Speek";

function Navbar() {
     const { speakContent, stopSpeech, resumeSpeach } = useContext(MyContext);
      useEffect(() => {
        return () => {
          // This will stop speech when the component unmounts (page change)
          window.speechSynthesis.cancel();
        };
      }, []);
  return (
    <>
     <div className="chera-nav">
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
      </div>
      {/* canvas start */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="canvas">
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
      </div>
      {/* canvas end */}
    </>
  )
}

export default Navbar