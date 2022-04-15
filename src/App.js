import React, {useEffect} from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import About from './pages/About';
import HowItWorksPages from './pages/how';
import SuccessPage from './pages/succes';
import OverviewPage from './pages/Overview';
import ChargingPage from './pages/charging';
import ServicePage from './pages/service';
import SignUpPage from './pages/signup';
import CountryPage from './pages/country';
import CityPage from './pages/city';
import SupportPage from './pages/support';
import ChartPage from './pages/chart';
import ForgotPage from './pages/forgot';
import mapboxgl from 'mapbox-gl';
import LogoutPage from './pages/deco';
import ReservationPage from './pages/reservation';

// import Calend from './components/Calendar/Calendar';
// import { LineGraph } from 'carbon-addons-data-viz-react';
// import 'carbon-addons-data-viz-react/sass/index.scss';




mapboxgl.accessToken = 'pk.eyJ1IjoiYmt1dGxhcjAwNDEiLCJhIjoiY2t5aWdja21zMmM0czJ2bjAyNDd1Y21nNSJ9.y3KGagGUhRXB5bdI8-7Dfw';

function App() {

  
  return (
    <>
    <Router>
      
      <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path='/signin' element ={<SigninPage/>}/>
      <Route path='/about' element= {<About />}/>
      <Route path='/howitworks' element= {<HowItWorksPages />}/>
      <Route path='/successstories' element={<SuccessPage />}/>
      <Route path='/overview' element={<OverviewPage />}/>
      <Route path='/charging' element={<ChargingPage />}/>
      <Route path='/services' element={<ServicePage />} />
      <Route path='/signup' element={<SignUpPage />}/>
      <Route path='/country' element={<CountryPage />}/>
      <Route path='/city' element={<CityPage />}/>
      <Route path='/chart' element={<ChartPage />}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='/forgot' element={<ForgotPage/>}/>
      <Route path='/logout' element={<LogoutPage/>}/>
      <Route path='/reservation' element={<ReservationPage/>}/>
      

     </Routes>

     
    </Router>
    {/* <Calend /> */}
    {/* <Api/> */}
    {/* <div id="aboutmap"></div> */}
    {/* <LineGraph/> */}
    
    </>
  );
}

export default App;
