import Bgvideo from "./Bgvideo";
import Cards from "./Cards";
import Carosel from "./Carosel";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PopupBanner from "./PopupBanner";
import Privacy from "./Privacy";
import Section from "./Section";

import Section3 from "./Section3";

function Home() {
  return (
    <div className="Container-fluid">
      {/* <Contact/> */}
      {/* <Privacy/> */}
      <div>
        <PopupBanner/>
        <Navbar />
      </div>
      <div className="container">
        <Carosel />
      </div>
       
        <div className="container">
        <Bgvideo/>
       
       <div className="container">
       <Section/>
      </div>
      
        </div> 
        <div className="container">
        <Section3/>
        </div> 
        <div className="container">
        <Footer/>
        </div> 
  
    </div>
  );
}
export default Home;
