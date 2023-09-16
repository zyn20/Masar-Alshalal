import './App.css';

import Home from './pages/Home';

import Contact from './pages/Contact';
import About from './pages/Testimonial';
import Servies from './pages/Services';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TermsandConditions from './pages/TermsandConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
  


        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
    
            <Route path="/services" element={<Servies />} />
           
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/terms-and-condition" element={<TermsandConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Router>

    </>
  );
}

export default App;
