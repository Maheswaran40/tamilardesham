import React, { useEffect, useState } from "react";
import "./Demo.css";


function Demo() {
  const [rollno, setRollno] = useState("");
  const [dob, setDob] = useState("");
  useEffect(() => {
    document.title = "Hall ticket download";
  }, []);
  
  function loginbutton() {
    
    if (rollno.trim() === "225113426" && dob.trim() === "2004-09-13") {
      alert("login Aagiduchuda ...");
     
    } else {
      alert("password maranthutiyada Funda...");
    }
  }
  return (
    <div className="maindiv">
      <div className="subdiv">
        <header>
          Bishop Heber College <br />
          <br />
          Controller of Examination
        </header>
        <div id="subdiv1">
          <img
            src="http://115.245.30.252:10108/examinations/hallticket-2025/ug_hall_ticket_ese-CIA/assets/images/bhclogo-l.png"
            alt="clg logo"
          />
          <input
            type="number"
            id="in1"
            onChange={(e) => setRollno(e.target.value)}
            placeholder="Roll number"
          />
          <input
            type="date"
            id="in2"
            onChange={(e) => setDob(e.target.value)}
            placeholder="date of birth"
          />
          <button onClick={loginbutton}>Sign In</button>
        </div>

        <footer>
          Hall Ticket Download for <br /> UG 2nd Internal Test March - 2025
          <br /> Designed and Developed in COE
        </footer>
      </div>
    </div>
  );
}

export default Demo;
// shift+alt+f =align item
// shit+alt =language change
