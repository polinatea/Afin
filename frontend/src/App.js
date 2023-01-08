import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import Profile from './pages/Profile'
import Chats from './pages/Chats'
import Login from './pages/Login';
import {Route,Routes} from "react-router-dom"

function App() {

  return (

    <div className="App">
        <Header />
        <div className='container-elem'>
          <Routes>
            <Route path='/events' element={<NotesListPage />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/chats' element={<Chats />}/>
            <Route path='/login' element={<Login />} />

          </Routes>
        </div>
        
    </div>
  );
}

export default App;
