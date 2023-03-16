import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Redirect,Route, Routes } from "react-router-dom";
import NavbarMenu from './Components/Navbar/NavbarMenu';
import PixelWeb from "./Pages/PixelWeb/PixelWeb";
import Web from "./Pages/Sluzby/Web";
import Eshop from "./Pages/Sluzby/Eshop";
import Marketing from "./Pages/Sluzby/Marketing";
import Technologie from './Pages/Technologie/Technologie';
import Kontakt from './Pages/Kontakt/Kontakt';
import Projekt from './Pages/Projekt/Projekt';
import Footer from './Components/Footer/Footer';

const App = () =>{
  return(
    <div className='App'>
        <Router>
          <header>
            <NavbarMenu></NavbarMenu>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<PixelWeb/>}></Route>
              <Route path='/weby' element={<Web/>}></Route>
              <Route path='/eshopy' element={<Eshop/>}></Route>
              <Route path='/marketing' element={<Marketing/>}></Route>
              <Route path='/technologie' element={<Technologie/>}></Route>
              <Route path='/kontakt' element={<Kontakt/>}></Route>
              <Route path='/projekt' element={<Projekt/>}></Route>
            </Routes>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
          
        </Router>
    </div>
  );
}

export default App;
