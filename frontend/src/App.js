import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import Profile from './pages/Profile'
import Chats from './pages/Chats'
import {Route,Routes} from "react-router-dom"

function App() {
  // let component;
  // switch(window.location.pathname){
  //   case "/events":
  //     component = <NotesListPage />
  //     break
  //   case "/profile":
  //     component = <Profile />
  //     break
  //   case "/chats":
  //     component = <Chats />
  //     break
  // }
  return (

    <div className="App">
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/events' element={<NotesListPage />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/chats' element={<Chats />}/>

          </Routes>
        </div>
        
    </div>
  );
}

export default App;
