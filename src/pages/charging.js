import React from 'react'
import Charging from '../components/Fonction/Charging/Charging'
import {BiArrowBack} from 'react-icons/bi';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import MyCalendar from '../components/Calendar/Calendar';


const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #000;
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
    <Charging />
    {/* <MyCalendar/> */}
    </>
  )
}

export default ChargingPage;