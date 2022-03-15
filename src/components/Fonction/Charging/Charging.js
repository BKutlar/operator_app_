import React, {useEffect} from 'react'; 
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import mapboxgl from 'mapbox-gl';


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



  

const Charging = () => {


  useEffect(() => {
    setTimeout(() =>{
     
        const map=  new mapboxgl.Map({
        container: 'chargingmap', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [1.907230, 48.992619],// starting position [lng, lat]
        zoom: 11,// starting zoom
        hash: true,
        
        
      });
    },2000)

    
}, [])

  return (
    <>
    <Icon to='/'>Helios</Icon>
    <div>Hello</div>
    <div id='chargingmap'></div>
    </>
  )
}

export default Charging