import React, {Fragment,useState,useEffect} from 'react'
import "../CSS/ListView.css"
const ListNote = () =>{

    //updating state
    let [events,setNotes] = useState([])
    useEffect(()=>{
        // calling get notes
        getNotes()
    },[])

    let getNotes = async() =>{
        // getting notes
       let response = await fetch('http://127.0.0.1:8000/afinapp/events/')
       let data = await response.json()
       console.log('DATA: ', data)
       setNotes(data)
       

    }
    return(
        <Fragment>
            <section className='listNote'>

                    <div className='row'>
                    {events.map((event,index)=>( 
                        <div className='column'>

                        
                            <div className='single-listNote'>
                                <div className='card'>
                                    <div className='listNote-top'>
                                    <img src="./images/bridge.jpg" alt="Image" />
                                    </div>
                                    
                                    <div className='listNote-content'>
                                        
                                    <h3>{event.event_name}</h3>
                                    <p>{event.date}</p>
                                    <p>{event.time}</p>
                                    <p>{event.address}</p>
                                    <p></p>
                                    </div> 
                                </div>
                            </div>
                            
                        </div>
                        ))}
                    </div>
                
            </section>
        </Fragment>
    )
}

export default ListNote