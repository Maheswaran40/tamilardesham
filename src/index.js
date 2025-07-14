import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Cheradynusty from './Tamilardesham/dynusty/chera/Cheradynusty';
import Choladynusty from './Tamilardesham/dynusty/chola/Choladynusty';
import Pandyadynusty from './Tamilardesham/dynusty/pandya/Pandyadynusty';
import Pallavadynusty from './Tamilardesham/dynusty/pallava/Pallavadynusty';
// import Home from './Tamilardesham/homepage/Home';
import Mainpage from './Tamilardesham/Mainpage';
import C_k_1 from './Tamilardesham/dynusty/chera/cherakings/C_k_1.jsx';
import C_k_2 from './Tamilardesham/dynusty/chera/cherakings/C_k_2.jsx';
import Speek from './Tamilardesham/dynusty/chera/cherakings/Speek.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Speek>
   <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/cheradynusty" element={<Cheradynusty />} />
        <Route path='/choladynusty' element={<Choladynusty />}/>
        <Route path='/pandyadynusty' element={<Pandyadynusty />}/>
        <Route path='/pallavadynusty'element={<Pallavadynusty/>}/>
        <Route path='/C_k_1' element={<C_k_1/>} />
        <Route path='/cherakings/C_k_2' element={<C_k_2/>}/>
      </Routes>
      </Speek>
   </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
