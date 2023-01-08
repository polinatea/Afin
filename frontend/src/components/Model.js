import React, {Fragment,useState,useEffect} from 'react'
import "../CSS/Model.css"


const Model = () =>{


    const [modal, setModal] = useState(false);
	const toggleModal = () =>{
		setModal(!modal)
	}
    return(
        <div>
            	  <div className='modal'>
	  <div className='overlay' onClick={toggleModal}></div>
		  <div className='modal-content'>
			  <h2>Hello modal</h2>
			  <button className='close-modal' onClick={toggleModal}>close</button>
		  </div>
	  
	</div>
        </div>
    )
}

export default Model