import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/ContactMe";
import Impact from "../pages/impact";

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
