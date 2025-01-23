import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage'
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
 
import Footer from './components/Footer';
import Profiles from './pages/Profiles';


function App() {
 
  return (
    <Router>
       
      
     <Navbar/>
     
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/profile' element={<Profiles/>}/>
       <Route path="/details/:id" element={<DetailsPage />} />
       <Route path='/about'element={<AboutUs/>}/>
       <Route path='/contact'element={<ContactUs/>}/>
     </Routes>
     <Footer />
    </Router>
    
  )
}

export default App