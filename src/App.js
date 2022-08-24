import React from 'react'

import Geofence from './components/Geofence';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard'
import Weather from './components/weather/Weather';
import Firestore from './components/firetrial';


export default function App() {
  return (
    <div>
      <Sidebar/>
     <Dashboard/>
     <Geofence/> 
     
      </div>
  )
}



/*  */
 