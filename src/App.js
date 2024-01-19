import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app_routes';
import NavBar from './components/Layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
import axios from "axios";

function App() {

  async  function getData(){
    const res = await axios.get( 'http://127.0.0.1:8000/v1/' )
    console.log(  res.data )
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <BrowserRouter>
         <NavBar/>
         <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
