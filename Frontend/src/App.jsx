import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Feed from "./Pages/Feed.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import SneakerDetails from "./Pages/SneakerDetails.jsx";
import Stock from "./Pages/Stock.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/in-stock" element={<Stock availability="in-stock" />} />
        <Route path="/upcoming" element={<Stock availability="upcoming" />} />
        <Route path="/sneakers/:id" element={<SneakerDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;