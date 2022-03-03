import React from 'react';
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
function App() {

 
  return (
    
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
      <Route path='/city' element={<CityPage />}/>;
     </Routes>

     
    </Router>

  );
}

export default App;
