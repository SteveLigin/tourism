import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Placetovisit from './componentvisit/Placetovisit';
import Besttimetovisit from './componentsbtv/Besttimetovisit';
import Food from './componentsfood/Food';
import Packages from './componentspakages/Packages';









function App() {
  return (

    <BrowserRouter>
      <div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path="/placetovisit" element={<Placetovisit />}>

          </Route>
          <Route path="/Besttimetovisit" element={<Besttimetovisit />}>

          </Route>
          <Route path="/Food" element={<Food />}>

          </Route>
          <Route path="/Packages" element={<Packages />}>

</Route>

        </Routes>

      </div>

    </BrowserRouter>








  )
}


export default App;