import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from './app_routes';
import NavBar from './components/Layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Customer_question from './components/Customer_question';
import Faq from './components/feedback_and_quires/Faq';
import Staff_members from './components/feedback_and_quires/Staff_members';
import Saved_data from './components/Saved_data';
import Answer from './components/Answer';




function App() {
  
  return (
    <BrowserRouter>
         <NavBar/>
           <Routes>
             <Route  path="/faq" element={<Faq />}/>
             <Route  path="/customer_question" element={<Customer_question />}/>
             <Route  path="/saved_data" element={<Saved_data/>}/>
             <Route  path="/staff_members" element={<Staff_members/>}/>
             <Route  path="/answer/:Id" element={<Answer/>}/>
             
            
             


             
            </Routes>
         <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
