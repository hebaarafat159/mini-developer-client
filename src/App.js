import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Courses from "./pages/Courses";
import HeaderComponent from './components/HeaderComponent';
import Footer from './components/Footer';
import Register from './pages/Register';
import CourseDetails from './pages/CourseDetails';
import CourseDetails2 from './pages/CourseDetails2';
import WhyUsComponent from './components/WhyUsComponent';
import OurVisionComponent from './components/OurVisionComponent';
import ConfirmationPage from './pages/ConfirmationPage';
import TermDates from './pages/TermDates';
import ConsentForm from './pages/ConsentForm';
import Testimonials from './pages/Testimonials';
import { HelmetProvider } from "react-helmet-async";
import AddTestimonial from './admin/addTestimonial';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <HeaderComponent />
        <div className={'routes-container'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/about-us" element={<OurVisionComponent />} />
            <Route path="/about/why-us" element={<WhyUsComponent />} />
            <Route path="/our-courses" element={<Courses />} />
            {/* <Route path="/our-courses/:id" element={<CourseDetails />} /> */}
            <Route path="/our-courses/:id" element={<CourseDetails2 />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/sign-up-form/:courseId" element={<Register />} />
            <Route path="/confirmation/:pageTitle" element={<ConfirmationPage />} />
            <Route path="/term-dates" element={<TermDates />} />
            <Route path="/consent-form/:studentId" element={<ConsentForm />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/add-testimonial" element={<AddTestimonial />} />
          </Routes>
        </div>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
