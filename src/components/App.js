import '../index.css';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import  Home  from '../pages/Home.js';
import OurServices from '../pages/OurServices';
import { Footer } from '../sections/Footer';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/our-services' element={<OurServices />} />
              <Route path='/contact-us' element={<ContactUs />} />
          </Routes>
          <section className="xl:padding-0 wide:padding-r">
             <Footer />
          </section>
    </BrowserRouter>

  );
}

export default App;
