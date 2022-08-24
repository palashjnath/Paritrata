/* global google */
import React from 'react';
import {firestore as database}  from '../firebase' 
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from 'react-google-maps';
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");

/**/

export default withScriptjs(withGoogleMap(props => (
  
  <GoogleMap
    defaultZoom={15}
    center={props.center}
    onClick={ev => {
      
      const sub = (e) => {
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
       
          
        // Add data to the store
        database.collection("geofencing_location").add({
           lat: lat,
           lng:lng
        })
        .then((docRef) => {
            alert("Location Successfully Submitted for Geofencing");
        })
        .catch((error) => {
            console.error("Error Submitting Location: ", error);
        });
    }
      sub()
      console.log("latitide = ", ev.latLng.lat());
      console.log("longitude = ", ev.latLng.lng());
    }}
  >
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.POLYGON}
      defaultOptions={{
        drawingControl: true,
        
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.POLYGON,
          ],
        },
      }}
      onPolygonComplete={props.doneDrawing}
    />
    {props.center.lat && props.center.lng && (
      <Marker position={props.center} />
    )}
    
  </GoogleMap>
)));
