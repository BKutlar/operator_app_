import React, { useEffect, Component, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import axios from 'axios';





mapboxgl.accessToken = 'pk.eyJ1IjoiYmt1dGxhcjAwNDEiLCJhIjoiY2t5aWdja21zMmM0czJ2bjAyNDd1Y21nNSJ9.y3KGagGUhRXB5bdI8-7Dfw';




export default function Map(){

const [state, setState] = useState();

  useEffect(() => {
    setTimeout(() => {

      const map = new mapboxgl.Map({
        container: 'heliosmap', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [0,20],// starting position [lng, lat]
        zoom: 5,// starting zoom
        hash: true,
        // baseApiUrl: 'https://api.electricitymap.org/v3/zones'


      });
      // map.on('load', () => {
      //   // Add a data source containing GeoJSON data

      //   map.addSource('maine', {
      //     'type': 'geojson',
      //     'data': {
      //       'type': 'Feature',
      //       'geometry': {
      //         'type': 'Polygon',

      //         //These coordinates outline France 
      //         'coordinates': [
      //           [
      //             [-67.13734, 45.13745],
      //             [-66.96466, 44.8097],
      //             [-68.03252, 44.3252],
      //             [-69.06, 43.98],
      //             [-70.11617, 43.68405],
      //             [-70.64573, 43.09008],
      //             [-70.75102, 43.08003],
      //             [-70.79761, 43.21973],
      //             [-70.98176, 43.36789],
      //             [-70.94416, 43.46633],
      //             [-71.08482, 45.30524],
      //             [-70.66002, 45.46022],
      //             [-70.30495, 45.91479],
      //             [-70.00014, 46.69317],
      //             [-69.23708, 47.44777],
      //             [-68.90478, 47.18479],
      //             [-68.2343, 47.35462],
      //             [-67.79035, 47.06624],
      //             [-67.79141, 45.70258],
      //             [-67.13734, 45.13745]

      //           ]
      //         ]
      //       }
      //     }
      //   });

      //   //Add a new layer to visualize the polygon
      //   map.addLayer({
      //     'id': 'maine',
      //     'type': 'fill',
      //     'source': 'maine',
      //     'layout': {},
      //     'paint': {
      //       'fill-color': 'transparent',
      //       'fill-opacity': 0.5,
      //     }

      //   });

      //   //Add a black outline around the polygon
      //   map.addLayer({
      //     'id': 'outline',
      //     'type': 'line',
      //     'source': 'maine',
      //     'lyout': {},
      //     'paint': {
      //       'line-color': 'red',
      //       'line-width': 3
      //     }
      //   });
      // });

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

    axios.get('https://api.electricitymap.org/v3/zones')
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
    </>
  )
}


