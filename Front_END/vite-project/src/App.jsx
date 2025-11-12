import './App.css'
import Login from './components/Login'
import Courses from './Courses/Courses'
import Home from './Home/Home'
import {Routes,Route, Navigate} from 'react-router-dom'
import Signup from './components/Signup'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useAuth } from './contex/AuthProvider'


function App() {
    const [authUser,setAuthUser]=useAuth()
  console.log(authUser)

    const location = useLocation();

  useEffect(() => {
    const modal = document.getElementById("my_modal_3");
    if (modal && modal.open) modal.close();
  }, [location]);
return(
  <>
    <div>
            {/*Modals*/} 
        <Login/>
        <Toaster/>
        
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
        <Route path='/signup' element={<Signup/>} />
    </Routes>
    </div>
  </>
)

}

export default App
