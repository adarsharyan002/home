import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Homepage from './pages/homepage';
import Project from './pages/Projects';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   
  
  <>
  <Navbar/>
  <>
  <Routes>
   <Route path="/" element={<Homepage/>} />
   <Route path="/project" element={<Project/>} />
  
</Routes>
  
  
  </>
  
  </>
    
  )
}

export default App
