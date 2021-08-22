import React from 'react'
import GoogleMapReact from 'google-map-react'
import { GiWineBottle } from "react-icons/gi";

  const LocationPin = ({ text }) => (
    <div className="pin">
      <GiWineBottle className="pin-icon" />
      <p className="pin-text">Henry Cellar</p>
    </div>
  )
const yesIWantToUseGoogleMapApiInternals = true;

  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB5SibsHD0MflvsGSFvgunYKR2yiGzaxF8' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          yesIWantToUseGoogleMapApiInternals={yesIWantToUseGoogleMapApiInternals}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map

