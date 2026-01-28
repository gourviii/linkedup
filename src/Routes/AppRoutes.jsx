import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Contact from "../pages/ContactMe.jsx";
import Impact from "../pages/Impact.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="/contact" element={<Contact />} />
      <Route path="/impact" element={<Impact />} />
    </Routes>
  );
};

export default AppRoutes;
