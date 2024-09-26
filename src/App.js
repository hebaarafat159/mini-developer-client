import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Courses from "./pages/Courses";
import HeaderComponent from './components/HeaderComponent';
import Footer from './components/Footer';
import Register from './pages/Register';
import CourseDetails from './pages/CourseDetails';
import WhyUsComponent from './components/WhyUsComponent';
import OurVisionComponent from './components/OurVisionComponent';
import ConfirmationPage from './pages/ConfirmationPage';
import TermDates from './pages/TermDates';
import ConsentForm from './pages/ConsentForm';
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <HeaderComponent />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/ourvision" element={<OurVisionComponent />} />
            <Route path="/about/whyus" element={<WhyUsComponent />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/register/:courseId" element={<Register />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/termdates" element={<TermDates />} />
            <Route path="/students/:studentId" element={<ConsentForm />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
