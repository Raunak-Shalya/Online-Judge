import NavBar from './components/NavBar';
import Loginpage from './components/loginpage.js';
import {Route, Routes} from 'react-router-dom';
import './styles/App.css';
import Homepage from './components/homepage.js';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
    <Route exact path='/login' element={<Loginpage />}/>
      <Route path='/homepage' element={<Homepage/>}/>
    </Routes>
    </>
  );
}

export default App;
