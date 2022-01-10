import React, { Fragment, useEffect } from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Title from './Title/Title';
import './App.scss';
import Footer from './Footer/Footer.js';
import Background from './Background/Background.js';
import AboutContainer from './AboutContainer/AboutContainer';
import ItemsContainer from './ItemsContainer/ItemsContainer';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import TShirtsContainer from './TShirtsContainer/TShirtsContainer.js';
import MoreAboutTelurian from './MoreAboutTelurian/MoreAboutTelurian';
import {useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTshirt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ItemsPhotos from './ItemsPhotos/ItemsPhotos.js';
import AboutTelurianOne from './Pages/AboutTelurianOne';
import AboutTelurianTwo from './Pages/AboutTelurianTwo';
import Order from './Pages/Order';
import Merch from './Pages/Merch';
import AboutTelurianExtra from './Pages/AboutTelurianExtra';
import AllPaths from './Pages/AllPaths';
import AboutTelluriumExtra from './Pages/AboutTelluriumExtra';
import TddGallery from './Pages/TddGallery';
import TaceGallery from './Pages/TaceGallery';

function App() {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  let mobileHeight = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${mobileHeight}px`);
  window.addEventListener('resize', () => {
  let mobileHeight = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${mobileHeight}px`);
  });

    return (
          <div className="App">
              <Background />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/about-telurian-1" element={<AboutTelurianOne />} />
              <Route exact path="/about-telurian-2" element={<AboutTelurianTwo />} />
              <Route exact path="/order" element={<Order />}/>
              <Route exact path="/merch" element={<Merch />}/>
              <Route exact path="/about-telurian-1/about-telurian" element={<AboutTelurianExtra />}/>
              <Route exact path="/about-telurian-1/about-tellurium" element={<AboutTelluriumExtra />}/>
              <Route path="/about-telurian-1/tdd-gallery" element={<TddGallery />}/>
              <Route path="/about-telurian-1/tace-gallery" element={<TaceGallery />}/>
              <Route path="*" element={<AllPaths />} />
            </Routes>
            <Footer />
          </div>
    )
}

export default App;
