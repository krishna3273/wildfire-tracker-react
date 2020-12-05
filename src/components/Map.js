import GoogleReactMap from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfo from './LocationInfo'
import { useState } from 'react'
const Map = ({ center, zoom, eventData }) => {
  const [locationInfo, setLocationInfo] = useState(null)
  //MAP_API_KEY needs to be obtained from google console before running this code
  let MAP_API_KEY=''
  const markers = eventData.map((event) => {
    console.log(
      event.categories[0].id,
      event.geometries[0].coordinates[1],
      event.geometries[0].coordinates[0]
    )
    if (event.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: event.id, title: event.title })}
        ></LocationMarker>
      )
    }
    return null
  })
  console.log(markers)
  return (
    <div className='map'>
      <GoogleReactMap
        bootstrapURLKeys={{ key: 'MAP_API_KEY' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleReactMap>
      {locationInfo && <LocationInfo info={locationInfo}></LocationInfo>}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
}

export default Map
