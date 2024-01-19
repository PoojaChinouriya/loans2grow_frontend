import './App.css';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { AppRoutes } from './app_routes';
import NavBar from './components/Layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Footer from './Footer';


function App() {
  return (
    <BrowserRouter>
         <AppRoutes/> 
         <Outlet/>
         <Footer/>
    </BrowserRouter>
  );
}

export default App;
