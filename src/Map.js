import React from "react";
import {
  withGoogleMap,
  
  GoogleMap,
  
  Marker
} from "react-google-maps";

function  Map (props)  {
  
 
  return ( 
    
      <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
      >
       
            <Marker
              position={{ lat: props.lat, lng: props.lng }}
            />
          
        
      </GoogleMap>
    );
  
}

const MapComponent = withGoogleMap(Map);

export default () => (
  <MapComponent
     apiKey= '98c355d73f22c6eb33c4bc0bd22031fe'
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px`, width: "500px" }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);
