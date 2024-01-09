import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app_routes';
import NavBar from './components/Layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
         <NavBar/>
         <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
