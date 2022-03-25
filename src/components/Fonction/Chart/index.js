// import React from 'react'
// import { Bar, Line, Pie } from 'react-chartjs-2'

// function Chart(props) {
//   return (
//     <div className="chart">
      
//       <Line
//         data={props.chartData}
//         options={{
//           title: {
//             display: props.displayTitle,
//             text: 'Largest Cities in Massachusetts',
//             fontSize: 25
//           },
//           legend: {
//             display: props.displayLegend,
//             position: props.legendPosition,
//             labels: {
//               fontColor: '#000'
//             }
//           }
//         }}
//       />
      
//     </div>
//   )
// }

// Chart.defaultProps = {
//   displayTitle: true,
//   displayLegend: false,
//   legendPosition: 'bottom'
// }

// export default Chart;


// // import React from 'react' ;
// // import styled from 'styled-components';
// // import {Link} from 'react-router-dom';

// // const Icon = styled(Link)`
// //     margin-left: 32px;
// //     margin-top: 32px;
// //     text-decoration: none;
// //     color: #fff;
// //     font-weight: 700;
// //     font-size: 32px;

// //     @media screen and (max-width: 480px) {
// //         margin-left: 16px;
// //         margin-top: 8px;
// //     }
// // `;

// // const Chart = () =>{
// //     return (
// //         <>
// //         <Icon to='/'>Helios</Icon>
// //         <div>Hello</div>
// //         </>
// //     )
// // }

// // export default Chart; 

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Index from './index'

// import './styles.css'

// class App extends React.Component {
//   state = {
//     chartData: {}
//   }

//   componentWillMount() {
//     this.getChartData()
//   }

//   getChartData() {
//     this.setState({
//       chartData: {
//         labels: [
//           'Boston',
//           'Worcester',
//           'Springfield',
//           'Lowell',
//           'Cambridge',
//           'New Bedford'
//         ],
//         datasets: [
//           {
//             data: [617594, 181045, 153060, 106519, 105162, 95072],
//             //backgroundColor:'green',
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.6)',
//               'rgba(54, 162, 235, 0.6)',
//               'rgba(255, 206, 86, 0.6)',
//               'rgba(75, 192, 192, 0.6)',
//               'rgba(153, 102, 255, 0.6)',
//               'rgba(255, 159, 64, 0.6)',
//               'rgba(255, 99, 132, 0.6)'
//             ]
//           }
//         ]
//       }
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>React &amp; Chart.js</h1>
//         <Index chartData={this.state.chartData} displayLegend={false} />
//       </div>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
