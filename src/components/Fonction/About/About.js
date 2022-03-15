import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmt1dGxhcjAwNDEiLCJhIjoiY2t5aWdja21zMmM0czJ2bjAyNDd1Y21nNSJ9.y3KGagGUhRXB5bdI8-7Dfw';


const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
}
`;

const About = () => {
 


  useEffect(() => {
      setTimeout(() =>{
       
        const map = new mapboxgl.Map({
          container: 'aboutmap', // container ID
          style: 'mapbox://styles/mapbox/streets-v11', // style URL
          center: [1.907230, 48.992619],// starting position [lng, lat]
          zoom: 11,// starting zoom
          hash: true,
          
        });
      },2000)
  })

  return (
    <>
    <Icon to="/">Helios</Icon>
    <div>Hello</div>
    <div id='aboutmap'></div>
    </>
  )
}

export default About