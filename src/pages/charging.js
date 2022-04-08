import React from 'react'
import Charging from '../components/Fonction/Charging/Charging'
import {BiArrowBack} from 'react-icons/bi';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import NavBarFleet from '../components/Fleet/NavBar';
import Calendar from '../components/Fleet/Calendar';
import TestCalendar from '../components/Fleet/TestCalendar';
import OTestCalendar from '../components/Fleet/OTestCalendar';
// import TestButton from '../components/Fleet/TestButton';
// import Flee from '../components/Fleet/Fleet'
// import MyCalendar from '../components/Calendar/Calendar';


const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: black;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`; //
const ChargingPage = () => {
  return (
    <>
    <Icon to='/'><BiArrowBack/></Icon>
    {/* <Charging /> */}
    <NavBarFleet/>
    <Calendar/>
    <TestCalendar/>
    <OTestCalendar/>
    {/* <TestButton/> */}
    {/* <MyCalendar/> */}
    {/* <Flee/> */}
    </>
  )
}

export default ChargingPage;