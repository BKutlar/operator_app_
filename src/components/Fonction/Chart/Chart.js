// // // import React, { Component} from 'react' ;
// // // import styled from 'styled-components';
// // // import {Link} from 'react-router-dom';
// // // // import {, Line, Pie} from'react-chartjs-2';
// // // import { Chart as ChartJS, registerables } from 'chart.js';
// // // import {  Bar,Line } from 'react-chartjs-2';
// // // import './styles.css';
// // // ChartJS.register(...registerables);

// // // const Icon = styled(Link)`
// // //     margin-left: 32px;
// // //     margin-top: 32px;
// // //     text-decoration: none;
// // //     color: #000;
// // //     font-weight: 700;
// // //     font-size: 32px;

// // //     @media screen and (max-width: 480px) {
// // //         margin-left: 16px;
// // //         margin-top: 8px;
// // //     }
// // // `;

// // // class Chart extends Component{

// // //     constructor(props){
// // //         super(props);

// // //         this.state = {
// // //             chartData: {
// // //                 labels: ['J1', 'J2', 'J3', 'J4', 'J5', 
// // //                 'J6', 'J7'],
// // //                 datasets: [{
// // //                     label: 'Footprint',
// // //                     data: [
                        
// // //                         3000,
// // //                         2500,
// // //                         3100,
// // //                         2700,
// // //                         2400,
// // //                         2300,
// // //                         2950,
// // //                         0,

// // //                     ],

// // //                     backgroundColor: [
// // //                         'rgba(255,99,132,0.6)',
// // //                         'rgba(54, 162, 235, 0.6)',
// // //                         'rgba(255, 206, 86, 0.6)',
// // //                         'rgba(75, 192, 192, 0.6)',
// // //                         'rgba(153, 102, 255, 0.6)',
// // //                         'rgba(255, 159, 64, 0.6)',
// // //                         'rgba(255, 99, 132, 0.6)'

// // //                     ]
// // //                 }]
// // //             }
// // //         }
// // //     }

   
      
// // //         static defaultProps = {
// // //           displayTitle:true,
// // //           displayLegend: true,
// // //           legendPosition:'right',
// // //           location:'City'
// // //         }
      
// // //         render(){
// // //           return (
// // //             <div className="chart">
             
      
// // //               <Line
// // //                 data={this.state.chartData}
// // //                 options={{
// // //                   title:{
// // //                     display:this.props.displayTitle,
// // //                     text:'Largest Cities In '+this.props.location,
// // //                     fontSize:25
// // //                   },
// // //                   legend:{
// // //                     display:this.props.displayLegend,
// // //                     position:this.props.legendPosition
// // //                   }
// // //                 }}
// // //               />
      
             
// // //             </div>
// // //           )
// // //         }
// // //       }
      
// // //       export default Chart;

// // import React, {Component} from 'react';
// // // import {Bar, Line, Pie} from 'react-chartjs-2';
// // import { Chart as ChartJS, registerables } from 'chart.js';
// // import {  Bar,Line,Pie} from 'react-chartjs-2';
// // import './styles.css';
// // import styled from 'styled-components';
// // import {Link} from 'react-router-dom';
// // ChartJS.register(...registerables);
// // const Icon = styled(Link)`
// //     margin-left: 32px;
// //     margin-top: 32px;
// //     text-decoration: none;
// //     color: #000;
// //     font-weight: 700;
// //     font-size: 32px;

// //     @media screen and (max-width: 480px) {
// //         margin-left: 16px;
// //         margin-top: 8px;
// //     }
// // `;

// // class Chart extends Component{
// //   constructor(props){
// //     super(props);
// //     this.state = {
// //       chartData:props.chartData
// //     }
// //   }

// //   static defaultProps = {
// //     displayTitle:true,
// //     displayLegend: true,
// //     legendPosition:'right',
// //     location:'City'
// //   }

// //   render(){
// //     return (
// //         <>
// //          <Icon to='/'>Helios</Icon>
// //       <div className="chart">
          
// //         {/* <Bar
// //           data={this.state.chartData}
// //           options={{

// //             maintainAspectRatio: true,
// //             title:{
// //               display:this.props.displayTitle,
// //               text:'Largest Cities In '+this.props.location,
// //               fontSize:25
// //             },
// //             legend:{
// //               display:this.props.displayLegend,
// //               position:this.props.legendPosition
// //             },
            
// //           }}
// //         /> */}

// //         <Line
// //           data={this.state.chartData}
// //           options={{
              
// //             title:{
// //               display:this.props.displayTitle,
// //               text:'Largest Cities In '+this.props.location,
// //               fontSize:25
// //             },
// //             legend:{
// //               display:this.props.displayLegend,
// //               position:this.props.legendPosition
// //             },
            
// //           }}
          
// //         />

// //         {/* <Pie
// //           data={this.state.chartData}
// //           options={{
// //             title:{
// //               display:this.props.displayTitle,
// //               text:'Largest Cities In '+this.props.location,
// //               fontSize:25
// //             },
// //             legend:{
// //               display:this.props.displayLegend,
// //               position:this.props.legendPosition
// //             }
// //           }}
// //         /> */}
        
// //       </div>
      
// //       </>
// //     )
// //   }
// // }

// // export default Chart;

// import "regenerator-runtime/runtime";
// import $ from "jquery";
// import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

// async function Chart() {
//   const sdk = new ChartsEmbedSDK({
//     baseUrl: "https://charts.mongodb.com/charts-userdatabase-ekrly"
//   });

//   const chart = sdk.createChart({
//     chartId: "623d96ca-3f03-45b4-80f8-6820a2f2755c"
//   });
//   await chart.render(document.getElementById("chart"));

//   $("#refresh").on("click", () => {
//     chart.refresh();
//   });
//   $("#country-filter").on("change", e => {
//     const country = e.target.value;
//     country
//       : chart.setFilter({});
//   });
// }

// Chart().catch(e => window.alert(e.message));


// export default Chart;


import 'regenerator-runtime/runtime';

import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';


 const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-userdatabase-ekrly",
    autoRefresh: true,
    maxDataAge: 10,
});



export default sdk;

