import { Component, OnInit } from '@angular/core';
// import Map from 'ol/Map';
// import Tile from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import View from 'ol/View';
// import { fromLonLat } from 'ol/proj.js';
// import Feature  from 'ol/Feature';
// import sVector from 'ol/source/Vector';
// import lvector from 'ol/layer/Vector';
// import Point from 'ol/geom/Point';
// import {Icon, Style } from 'ol/style';
// import { Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
// import TileJSON from 'ol/source/TileJSON';
// import VectorSource from 'ol/source/Vector';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

//   map;
//   ellicottcity;
//   vectorSource;
//   vectorLayer;
//   rasterLayer;
//   towson: any;
//   columbia: any;
//   constructor() { }

//   ngOnInit(): void {
//     this.initializeMap();
//   }
// initializeMap(){
//   this.ellicottcity = new Feature({
//     geometry: new Point(fromLonLat([-76.798309, 39.267326]))
//   });
//   this.ellicottcity.setStyle(new Style({
//     image : new Icon(({
      
//       color : '#8959A8',
//       crossOrigin : 'anonymous',
//       src : 'assets/vectorpoint.svg',
//       imgSize : [25,25]
//     }))
//   }));
//   this.towson = new Feature({
//     geometry: new Point(fromLonLat([-76.605049, 39.401859]))
//   });

//   this.columbia = new Feature({
//     geometry: new Point(fromLonLat([-95.951584, 36.133583]))
//   });

// this.vectorSource = new VectorSource({
//   features : [this.ellicottcity, this.towson,this.columbia]
// });
// this.vectorLayer = new VectorLayer({
//   source : this.vectorSource
// })
// this.rasterLayer = new TileLayer({
//   source : new TileJSON({
//     url: 'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
//     crossOrigin : ''
//   })
// });
//   this.map = new Map({
//     target : 'map',
//     layers : [ 
//       // this.rasterLayer, this.vectorLayer
//       new Tile ({
//         source : new OSM()
//       })
//     ],
//     view: new View({
//       center: fromLonLat([-76.798309, 39.267326]),
//       zoom : 7
//     })

//   });
  
// }
}
