import { Route, Routes } from "react-router-dom";
import DashboardCarousel from "./components/DashboardCarousel";
import Footer from "./components/Footer";
import GenericNavbar from "./components/GenericNavbar";
import Services from "./components/Services";
import Home from "./pages/Home";
import Achievement from "./pages/AboutUs/Achievement";
import BoardOfDirector from "./pages/AboutUs/BoardOfDirector";
import Intro from "./pages/AboutUs/Intro";
import Location from "./pages/AboutUs/Location";
import Network from "./pages/AboutUs/Network";
import Principal from "./pages/AboutUs/Principal";
import Teachers from "./pages/AboutUs/Teachers";
import VisionMission from "./pages/AboutUs/VisionMission";
import Base from "./pages/Academics/Base";
import Kindergarten from "./pages/Academics/Kindergarten";
import PlusTwo from "./pages/Academics/PlusTwo";
import Secondary from "./pages/Academics/Secondary";
import ContactUs from "./pages/ContactUs";
import Downloads from "./pages/Downloads";
import Gallery from "./pages/Gallery";
import Glimpses from "./pages/Glimpses";
import NewsEvents from "./pages/NewsEvents";
import Specials from "./pages/Specials";
import AdminLogin from "./admin/AdminLogin";

function App() {
  const isLogin = true;
  return (
    <div className="App">
      {isLogin && (
        <>
          <GenericNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/bod" element={<BoardOfDirector />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/location" element={<Location />} />
            <Route path="/network" element={<Network />} />
            <Route path="/principal" element={<Principal />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/visionmission" element={<VisionMission />} />
            <Route path="/base" element={<Base />} />
            <Route path="/kindergarten" element={<Kindergarten />} />
            <Route path="/plustwo" element={<PlusTwo />} />
            <Route path="/secondary" element={<Secondary />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/glimpses" element={<Glimpses />} />
            <Route path="/newsevents" element={<NewsEvents />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/login" element={<AdminLogin />} />
          </Routes>
          <Footer />
        </>
      )}
      {!isLogin && (
        <>
          <Routes></Routes>
        </>
      )}
    </div>
  );
}

export default App;
