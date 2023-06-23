import {Route, Routes} from 'react-router-dom';
import './styles/App.css';
import Loginpage from './components/loginpage.js';
import Homepage from './components/homepage.js';

function App() {
  return (
    <>
    <Routes>
    <Route exact path='/login' element={<Loginpage />}/>
      <Route path='/homepage' element={<Homepage/>}/>
    </Routes>
    </>
  );
}

export default App;
