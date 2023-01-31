import React, {useState,useEffect} from 'react'
import ListNote from '../components/ListView'
import MapNote from '../components/MapView' 
import SwipeNote from '../components/SwipeView' 
import "../CSS/EventsControl.css"

export const NotesListPage = () => {

// //updating state
//     let [events,setNotes] = useState([])
//     useEffect(()=>{
//         // calling get notes
//         getNotes()
//     },[])

//     let getNotes = async() =>{
//         // getting notes
//        let response = await fetch('http://127.0.0.1:8000/afinapp/events/')
//        let data = await response.json()
//        console.log('DATA: ', data)
//        setNotes(data)

//     }
    // CORS error -  we are running our app on different ports
    // react is trying to make a request to djabgo
    // django doesnt know who react is and is blocking it
    // fix: specifying list of urls that allowed to call our api or allow all
    // django-cors-headers
    // https://github.com/adamchainz/django-cors-headers
    // python -m pip install django-cors-headers


    const [active, setActive] = useState("List");
  return (
    <div>
      <div className='control-box'>

      <div className='control-field'>
        <button className="control-button " onClick={()=> setActive("Swipe")}>Swipe</button>
        <button className="control-button " onClick={()=> setActive("List")}>List</button>
        <button className="control-button" onClick={()=> setActive("Map")}>Map</button>
      </div>

      </div>
      
      
      {active ==="Swipe" && <SwipeNote />}
      {active ==="List" && <ListNote />}
      {active ==="Map" && <MapNote />}
      
        {/* <div className="notes-list">
          {events.map((event,index)=>(
            //rendering data
            <div>
              <h2>{event.event_name}</h2>
              <p>{event.date}</p>
              <p>{event.time}</p>
              <p>{event.address}</p>
              <p>{event.photo}</p>
              <p>{event.location_lat}</p>
              <p>{event.location_lon}</p>
              </div>
          ))}
        </div> */}
    </div>

  )
}
export default NotesListPage