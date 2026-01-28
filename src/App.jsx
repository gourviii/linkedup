import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsappFloat";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
    
    <ScrollToTop/>
      <Navbar />
      <AppRoutes />
      <WhatsAppFloat /> 
      <Footer/>
     
    </BrowserRouter>
  );
}

export default App;
