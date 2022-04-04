import React, { useEffect, Component, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
// import MyCalendar from '../Calendar/Calendar';
// import Aide from './aide';




mapboxgl.accessToken = 'pk.eyJ1IjoiYmt1dGxhcjAwNDEiLCJhIjoiY2t5aWdja21zMmM0czJ2bjAyNDd1Y21nNSJ9.y3KGagGUhRXB5bdI8-7Dfw';




export default function Map() {

  const [state, setState] = useState(0);
  const [stateF, setStateF] = useState(0);
 
  

  useEffect(()  => {

   axios.get('http://localhost:5000/bus', {
      
      
  })
  .then(result => {
    console.log(result);
  const TotalIntensity = result.data.buses.filter(bus=>bus.country==='Turkey').map(bus=>bus.carbonIntensity).reduce((val, somme)=> val + somme)
  setState(TotalIntensity);
  const FIntensity = result.data.buses.filter(bus=>bus.country==='France').map(bus=>bus.carbonIntensity).reduce((val, somme)=>val+somme);
  setStateF(FIntensity*30);
  
  
  })

    setTimeout(() => {


      const map = new mapboxgl.Map({
        container: 'heliosmap', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [32.859741,39.933365],// starting position [lng, lat]
        zoom: 5,// starting zoom
        hash: true,
        // baseApiUrl: 'https://api.electricitymap.org/v3/zones'


      }, 2000);

      map.on('load', () => {
        // Add a data source containing GeoJSON data

        map.addSource('maine',
          {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [
                {
                  'properties': {
                    'description':
                      '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                    'icon': 'music-15'
                  },

                  'geometry': {
                    'type': 'Polygon',

                    //These coordinates outline Turkey 
                    'coordinates': [
                      [
                        // [-67.13734, 45.13745],
                        // [-66.96466, 44.8097],
                        // [-68.03252, 44.3252],
                        // [-69.06, 43.98],
                        // [-70.11617, 43.68405],
                        // [-70.64573, 43.09008],
                        // [-70.75102, 43.08003],
                        // [-70.79761, 43.21973],
                        // [-70.98176, 43.36789],
                        // [-70.94416, 43.46633],
                        // [-71.08482, 45.30524],
                        // [-70.66002, 45.46022],
                        // [-70.30495, 45.91479],
                        // [-70.00014, 46.69317],
                        // [-69.23708, 47.44777],
                        // [-68.90478, 47.18479],
                        // [-68.2343, 47.35462],
                        // [-67.79035, 47.06624],
                        // [-67.79141, 45.70258],
                        // [-67.13734, 45.13745]

                        [
                          28.828124999999996,
                          40.84706035607122
                        ],
                        [
                          26.3671875,
                          40.245991504199026
                        ],
                        [
                          27.509765625,
                          37.3002752813443
                        ],
                        [
                          29.53125,
                          36.1733569352216
                        ],
                        [
                          31.025390625,
                          36.66841891894786
                        ],
                        [
                          32.16796875,
                          36.1733569352216
                        ],
                        [
                          34.365234375,
                          36.38591277287651
                        ],
                        [
                          35.595703125,
                          36.4566360115962
                        ],
                        [
                          36.298828125,
                          35.96022296929667
                        ],
                        [
                          36.73828124999999,
                          36.73888412439431
                        ],
                        [
                          44.82421875,
                          37.23032838760387
                        ],
                        [
                          44.47265625,
                          38.54816542304656
                        ],
                        [
                          44.384765625,
                          39.436192999314095
                        ],
                        [
                          43.76953125,
                          40.04443758460856
                        ],
                        [
                          42.5390625,
                          41.64007838467894
                        ],
                        [
                          40.517578125,
                          40.97989806962013
                        ],
                        [
                          36.2109375,
                          41.31082388091818
                        ],
                        [
                          33.310546875,
                          42.09822241118974
                        ],
                        [
                          29.179687499999996,
                          40.97989806962013
                        ]
                        

                      ]
                    ]
                    
        
                  },

                  'properties': {
                    name:`${state}g`
                  },
                },
               

                // {
                //   'type': 'Feature',
                //   'properties': {
                //   'description':
                //   '<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
                //   'icon': 'music-15'
                //   },
                //   'geometry': {
                //   'type': 'Point',
                //   'coordinates': [0,20]
                //   },
                // }

              ]

              
            }

           
          });
          map.addSource('france',
          {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [
                {
                  'properties': {
                    'description':
                      '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                    'icon': 'music-15'
                  },

                  'geometry': {
                    'type': 'Polygon',

                    //These coordinates outline Turkey 
                    'coordinates': [
                      [
                        // [-67.13734, 45.13745],
                        // [-66.96466, 44.8097],
                        // [-68.03252, 44.3252],
                        // [-69.06, 43.98],
                        // [-70.11617, 43.68405],
                        // [-70.64573, 43.09008],
                        // [-70.75102, 43.08003],
                        // [-70.79761, 43.21973],
                        // [-70.98176, 43.36789],
                        // [-70.94416, 43.46633],
                        // [-71.08482, 45.30524],
                        // [-70.66002, 45.46022],
                        // [-70.30495, 45.91479],
                        // [-70.00014, 46.69317],
                        // [-69.23708, 47.44777],
                        // [-68.90478, 47.18479],
                        // [-68.2343, 47.35462],
                        // [-67.79035, 47.06624],
                        // [-67.79141, 45.70258],
                        // [-67.13734, 45.13745]

                        [
                          2.5927734375,
                          51.04139389812637
                        ],
                        [
                          -2.0654296875,
                          49.63917719651036
                        ],
                        [
                          -4.74609375,
                          48.45835188280866
                        ],
                        [
                          -1.7852783203125,
                          43.35314407444698
                        ],
                        [
                          3.076171875,
                          42.45588764197166
                        ],
                        [
                          7.55859375,
                          43.77109381775651
                        ],
                        [
                          6.767578125,
                          45.182036837015886
                        ],
                        [
                          6.8994140625,
                          45.85941212790755
                        ],
                        [
                          6.723632812499999,
                          46.40756396630067
                        ],
                        [
                          6.459960937499999,
                          46.9502622421856
                        ],
                        [
                          6.943359374999999,
                          47.517200697839414
                        ],
                        [
                          7.5146484375,
                          47.60616304386874
                        ],
                        [
                          8.173828125,
                          48.980216985374994
                        ],
                        [
                          2.63671875,
                          50.90303283111257
                        ],
                        [
                          2.8125,
                          50.958426723359935
                        ],
                        [
                          2.6092529296875,
                          51.02412130394265
                        ],
                        [
                          2.5927734375,
                          51.04139389812637
                        
                        ]
                        

                      ]
                    ]
                    
        
                  },

                  'properties': {
                    name:`${stateF}g`
                  },
                },
               
              ]

              
            }

           
          });
          

        //Add a new layer to visualize the polygon
        map.addLayer({
          'id': 'maine',
          'type': 'fill',
          'source': 'maine',
          'layout': {
            
            },
          'paint': {
            'fill-color':  state>5000 ? 'red': state>300 ? 'orange' : 'green',
            'fill-opacity': 0.5,
          }

        });
        map.addLayer({
          'id': 'france',
          'type': 'fill',
          'source': 'france',
          'layout': {
            
            },
          'paint': {
            'fill-color':  stateF>5000 ? 'red': stateF>500 ? 'orange' : 'green',
            'fill-opacity': 0.5,
          }

        });

        // map.addLayer({
        //   'id': 'maine',
        //   'type': 'symbol',
        //   'source': 'maine',
        //   'layout': {
        //   'icon-image': '{icon}',
        //   'icon-allow-overlap': true
        //   }
        //   });

        //Add a black outline around the polygon
        map.addLayer({
          'id': 'outline',
          'type': 'line',
          'source': 'maine',
          'lyout': {},
          'paint': {
            'line-color': state>5000 ? 'red': state>300 ? 'orange' : 'green',
            'line-width': 3
          }
        });
        map.on('click', 'maine', (e)=>{
          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.name)
            .addTo(map);
        });
        map.on('mouseenter', 'maine', () => {
          map.getCanvas().style.cursor = 'pointer';
        });

        map.on('mouseleave', 'maine', () => {
          map.getCanvas().style.pointer='';
        })
      });

      
      map.on('click', 'france', (e)=>{
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(e.features[0].properties.name)
          .addTo(map);
          
      });
      map.on('mouseenter', 'france', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'france', () => {
        map.getCanvas().style.pointer='';
      })
    

     
      // map.on('mouseenter', 'places', () => {
      //   map.on('mouseenter', 'places', () => {
      //         map.getCanvas().style.cursor = 'pointer';
      //         });
      //          map.on('mouseleave', 'places', () => {
      //               map.getCanvas().style.cursor = '';
      //               });

      map.on('load', () => {
        map.addSource('country-boundaries-simplified', {
          type: 'vector',
          url: 'mapbox://examples.countries-simplification'
        });
        map.addLayer({
          'id': 'countries-simplification-data',
          'type': 'line',
          'source': 'country-boundaries-simplified',
          'source-layer': 'countries_polygons',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#ff69b4',
            'line-width': 1
          }
        });

      });



    }, 2000)



    var headers = {
      'Accept': 'application/json'
    }
    axios.get('https://api.electricitymap.org/v3/zones', {
      headers: headers,
    })
      .then(response => {

        console.log(response)

      })


  })

  
  return (
    <>
      <div id='heliosmap'></div>
      {/* {this.state.data} */}{
        // posts.map(post => <div key={post.id}>{posts.zoneName}</div>)
        // {this.getAxios}
      }
      {/* <Aide/> */}
    </>
  )
}

  
