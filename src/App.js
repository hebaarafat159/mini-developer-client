import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Courses from "./pages/Courses";
import HeaderComponent from './components/HeaderComponent';
import Footer from './components/Footer';
import Register from './pages/Register';
import CourseDetails from './pages/CourseDetails';
import WhyUsComponent from './components/WhyUsComponent';
import OurVisionComponent from './components/OurVisionComponent';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/ourvision" element={<OurVisionComponent />} />
          <Route path="/about/whyus" element={<WhyUsComponent />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/register/:courseId" element={<Register />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
