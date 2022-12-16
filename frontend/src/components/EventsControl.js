import React from 'react'
import "../CSS/EventsControl.css"
const Control = () =>{

    function goToSwipe(){
        console.log("kek");
    }
    function goToList(){
        console.log("list");
    }
    function goToMap(){
        console.log("Map");
    }

    return(
        <div className='control-field'>

        <button onClick={goToSwipe}>
            Swipe
        </button>

        <button onClick={goToList}>
            List
        </button>

        <button onClick={goToMap}>
            Map
        </button>
        </div>

    )
}
export default Control