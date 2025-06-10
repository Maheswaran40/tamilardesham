import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import  './Home.css';

function Home() {
  const [showList, setShowList] = useState(false);
  const location = useLocation();

  return (<>
    <div id='homediv'>
    <header className="header">
      <img id='img1' src="http://115.245.30.252:10108/examinations/hallticket-2025/ug_hall_ticket_ese-CIA/assets/images/bhclogo-l.png" alt="logo" />

      {!showList && (
        <button id="open" onClick={() => setShowList(true)}>Show</button>
      )}
      
      {showList && (
        <ul className="unlisted">
          <li>
            {location.pathname !== '/Hallticket' && (
              <Link className="navlink" to="/Hallticket">Hallticket</Link>
            )}
          </li>
          <li>List Item 2</li>
          <li>List Item 3</li>

          <li>
            <button id="close" onClick={() => setShowList(false)}>Close</button>
          </li>
        </ul>
      )}

<div id='textbishop'>Bishop Heber College Autonomous <br /> Nammbi Vaanga OOmbadi vaangitu ponga</div>
    </header>
    </div>
    <div id='homediv2'>
      <img id='img2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzwJr9fVPbP1rNKEvWeeSZqcWhDuUh1LZMw&s" alt="" />
    </div>
    </>
  );
}

export default Home;
