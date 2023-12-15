import "./App.css";
 import Home from "./components/Home";
 import { Routes, Route } from "react-router-dom";
 import Contact from "./components/Contact";
 import Privacy from "./components/Privacy";
 import Navbar from "./components/Navbar";
 import Admin from "./components/AdminSite/Admin"
 import PopupBanner from "./components/PopupBanner";
 import Popstate from "./components/Context/Popstate";
 import Signin from "./components/Signin";
 import Signup from "./components/Signup";
 import About from "./components/About";
import Disclaimer from "./components/Disclaimer";
 import Cookies from "./components/Cookies";
 import Tos from "./components/Tos";
 import Rishtaas from "./components/Rishtaas";
import AdminSidebar from "./components/AdminSite/AdminSidebar";

 function App() {
   return (
        <>
      <Popstate>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/rishtaas" element={<Rishtaas />} />
         <Route path="/disclaimer" element={<Disclaimer />} />
         <Route path="/signin" element={<Signin />} />
         <Route path="/privacy" element={<Privacy />} />
         <Route path="/cookies" element={<Cookies />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/TOS" element={<Tos />} />
         <Route path="/admin" element={<Admin/>} />
         <Route path="/adminnew" element={<AdminSidebar/>} />
       </Routes>
       
       </Popstate>
       </>

    
   );
 }

export default App;
















