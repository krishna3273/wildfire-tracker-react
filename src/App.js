import Map from './components/Map'
import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Header from './components/Header'
function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])
  return (
    <div>
      <Header></Header>
      {!loading ? <Map eventData={eventData}></Map> : <Loader></Loader>}
    </div>
  )
}

export default App
