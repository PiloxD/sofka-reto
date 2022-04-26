import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import Login from './components/Login';
import Gamelvl1 from './components/Gamelvl1';
import Gamelvl2 from './components/Gamelvl2';
import Gamelvl3 from './components/Gamelvl3';
import Gamelvl4 from './components/Gamelvl4';
import Gamelvl5 from './components/Gamelvl5';



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Gamelvl1' element={<Gamelvl1 />} />
        <Route path='/Gamelvl2' element={<Gamelvl2 />} />
        <Route path='/Gamelvl3' element={<Gamelvl3 />} />
        <Route path='/Gamelvl4' element={<Gamelvl4 />} />
        <Route path='/Gamelvl5' element={<Gamelvl5 />} />



      </Routes>

    </div>
  )
}

export default App;
