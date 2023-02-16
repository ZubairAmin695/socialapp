
import './App.css';
import Login from './pages/login/Login';
import { Profile } from './pages/profile/Profile';
import Register from './pages/register/Register';
import {
  BrowserRouter  ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LeftBar from './components/LeftBar/LeftBar';

function App() {
  return (

    // <BrowserRouter>
    
    // <Routes>
    <>
     {/* <Login/> */}
     <Register/>
   
     <Profile/>  <LeftBar/></>
// </Routes>
    
//     </BrowserRouter>
  );
}

export default App;
