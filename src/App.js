import './App.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import Home from './components/Home.js';
import Forecast from './components/Forecast.js';
import Map from './components/Map.js';
import Topbar from './components/Topbar.js';
import Sidebar from './components/Sidebar.js';

function App() {
  const[showSidebar, setSidebar] = useState(false);

  useEffect(() => {
    //inserting the labels into the buttons
    var buttons = document.querySelectorAll('[aria-label="Go to slide 1"]');
    var text = document.createTextNode("Home");
    if (!buttons[0].hasChildNodes()) {
      buttons[0].appendChild(text)
    }

    buttons = document.querySelectorAll('[aria-label="Go to slide 2"]');
    text = document.createTextNode("Forecast");
    if (!buttons[0].hasChildNodes()) {
      buttons[0].appendChild(text)
    }

    buttons = document.querySelectorAll('[aria-label="Go to slide 3"]');
    text = document.createTextNode("Map");
    if (!buttons[0].hasChildNodes()) {
      buttons[0].appendChild(text)
    }
  });

  const toggleSide = () => {
    setSidebar(!showSidebar)
  }

  return (
    <div className="App">
      <Topbar toggle={toggleSide}/>
      <Sidebar showSidebar={showSidebar} toggle={toggleSide}/>
      <Splide
        options={{
          arrows: false,
          pagination: true,
        }}
      >
        <SplideSlide>
          <Home />
        </SplideSlide>
        <SplideSlide>
          <Forecast />
        </SplideSlide>
        <SplideSlide>
          <Map />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default App;
