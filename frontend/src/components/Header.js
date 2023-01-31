import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "../CSS/Model.css"

const Header = () => {

	const [modal, setModal] = useState(false);
	const toggleModal = () =>{
		setModal(!modal)
	}

  return (
	<div>
    <nav className='nav'>
      <Link to='/' className='site-title'>Afin</Link>
      <ul>
		<li className="add-event-button">
		<button className=" border-2 w-14 rounded-md bg-white text-[#005c58] h-8 mr-10" onClick={toggleModal}>+</button>
		</li>
        <li>
          <Link to='/events'>
         
            <p>Events</p>
          </Link>
          
        </li>
        <li>
          <Link to='/chats'>
            
            <p>Chats</p>
          </Link>
        </li>
        <li>
          <Link to='/profile'>
            
              <p>Profile</p>
          </Link>
        </li>
		<li>
          <Link to='/login'>
            
              <p>Login</p>
          </Link>
        </li>
      </ul>
      </nav>
	  {modal &&(
	  <div className='modal'>
	  <div className='overlay' onClick={toggleModal}></div>
		  <div className='modal-content'>
			  <h2>Добавление мероприятия</h2>
			  
				<form>
					<div className='field'>
						<label>Название мероприятия:</label>
						<input type="text" name="title" />
					</div>
					<div className='field'>
						<label>Дата и время:</label>
						<div className='dateTime-container'>
						<input className='date' type="date" name='date' />
						<input className='time' type="time" name='time' />
						</div>
					</div>
					<div className='field'>
					<label>Адрес проведения:</label>
					<input type="text" name="address" />
					</div>
					<div className='field'>
					<label>Требуемые навыки:</label>
					<input type="text" name="address" />
					</div>
					<div className='field'>
					<label>Краткое описание:</label>
					<input className='short-desk' type="text" name="address" />
					</div>
					<div className='buttons-container'>
					<input className='submit' type="submit" value="Сохранить" />
					<button className='close-modal' onClick={toggleModal}>Закрыть</button>
					</div>
				</form>
			  

		  </div>
	  
	</div>
	  )}

	  </div>
  )
}

export default Header