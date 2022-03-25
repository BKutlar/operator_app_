import React, { Component, useEffect } from 'react';
// import Chart from '../components/Fonction/Chart/Chart';
// import Chart from '../components/Fonction/Chart/Chart';
// import logo from './logo.svg';
// import './App.css';
import sdk from '../components/Fonction/Chart/Chart';
import {BiArrowBack} from 'react-icons/bi';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import $ from 'jquery';

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

 function ChartPage() {
  
  const chart1 = sdk.createChart({chartId: "623d96ca-3f03-45b4-80f8-6820a2f2755c"});
  setTimeout(()=>{chart1.render(document.getElementById("chart1"))}, 1000);
useEffect(()=>{
setTimeout(()=>{
  $("#fleet-filter").on("change", e =>{
    console.log("fleet change")
    const fleet = e.target.value;
    fleet 
    ? chart1.setFilter({"fleet": Number(fleet)})
    : chart1.setFilter({})
  });
  
}, 2000)
})



  return (
    <>
    
    <label>Fleet
    <select id='fleet-filter'>
      <option value="">--All--</option>
      <option value="1" >Fleet 1</option>
      <option value="2">Fleet 2</option>
    </select>
    </label>
    <div id="chart1" className="chart"></div>


     <Icon to="/"><BiArrowBack/></Icon>
    </>
  )
}

export default ChartPage;