import '../index.css'; // Ensure the correct path to your CSS file
import AboutUs from '../pages/AboutUs';
import { Home } from '../pages/Home';
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
          </Routes>
          <section className="xl:padding-0 wide:padding-r">
             <Footer />
          </section>
    </BrowserRouter>

  );
}

export default App;
