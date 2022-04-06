import React from 'react';
import About from '../components/Fonction/About/About';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
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
`; 
// impor/t mapboxgl from 'mapbox-gl';

const AboutPage = () => {
    
  return (
    <>
<Icon to='/'><BiArrowBack/></Icon>
    <About />
    
    </>
  )
}

export default AboutPage;