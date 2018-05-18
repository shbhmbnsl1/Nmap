/*global google*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		map:'',
		markers:[],
		locations:[
          {
            name:'Burger farm',
            type:'Restaurant',
            lat:26.9063,
            lng:75.7964
          },
          {
            name:'Cafe RJ14',
            type:'Restaurant',
            lat:26.9039,
            lng:75.7947
          },
          {
            name: 'Home Cafe by Mr.Beans',
            type:'Restaurant',
            lat:26.9050,
            lng:75.7941
          },
            {
            name:'Kanha Restaurant Jaipur',
            type:'Restaurant',
            lat:26.9123,
            lng:75.8006
          },
          {
            name:'Hawa Mahal',
            type:'Tourist Place',
            lat:26.9239,
            lng:75.8267
          },
          {
            name:'MGF Metropolitan Mall',
            type:'Shopping Mall',
            lat:26.9027,
            lng:75.7937
          },
          {
            name:'INOX Jaipur - C Scheme / Crystal Palm',
            type:'Shopping Mall',
            lat:26.9034,
            lng:75.7925
          },
          {
          	name:'Cafe F-32',
          	type:'Restaurant',
          	lat:26.9075,
          	lng:75.7956
          }
        ]
	}
	componentDidMount=()=> {
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = this.initMap;
        // Asynchronously load the Google Maps script, passing in the callback reference
        loadMapJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCp52sIKoRWI-CEztzGFakaIXW1mx8-3z4&callback=initMap')
    }
     initMap=()=> {
    //Constructor creates a new map - only center and zoom are required
      var map = new google.maps.Map(document.getElementById('map'),{
            center: {lat: 26.9124, lng: 75.7873},
            zoom: 14
      });
      this.setState({map:map})

      this.state.locations.forEach(location => {
      	const marker = new.google.maps.Marker({
      		position: {lat: location.location.lat, lng:location.location.lng}
      		map:map
      		title:location.name
      	})
      })
  }
  render() {
    return (
      <div className="App">
      	<div className="map-container" role="application" tabIndex="-1">
      		<div id="map" style={{height: window.innerHeight + "px",}}>
      		</div>
      	</div>
      </div>
    );
  }
}

export default App;

function loadMapJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}