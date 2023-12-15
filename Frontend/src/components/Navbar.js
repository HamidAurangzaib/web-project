import "./Text.css"
import logo from "./images/rishta2.png"
import { Link } from "react-router-dom";
function Navbar (){

    return(
        <nav class="navbar navbar-expand-lg shadow-sm p-3 mb-3 rounded" style={{backgroundColor:"#C81262"}}>
  <div class="container">
  <Link to="/" className="navbar-brand mb--5"><img src={logo} alt="logo" width="50"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
        <Link to="/" className="nav-link">Home</Link> 
        </li>
        <li class="nav-item">
        <Link to="/admin" className="nav-link">Admin</Link> 
        </li>
        <li class="nav-item">
        <Link to="/adminnew" className="nav-link">Admin New</Link> 
        </li>
        <li class="nav-item">
        <Link to="/rishtaas" className="nav-link">Rishtas</Link> 
        </li>
        <li class="nav-item">
        <Link to="/contact" className="nav-link">Contact Us</Link> 
        </li>
        <li class="nav-item">
        <Link to="/disclaimer" className="nav-link">Disclaimer</Link> 
        </li>
        <li class="nav-item">
         
          <Link to="/privacy" className="nav-link">Privacy</Link> 
        </li>
        <li class="nav-item">
         
          <Link to="/about" className="nav-link">About Us</Link> 
        </li>
        <li class="nav-item">
         
         <Link to="/cookies" className="nav-link">Cookies Policy</Link> 
       </li>
        
        <li class="nav-item">
         
         <Link to="/signin" className="nav-link">Sign In</Link> 
       </li>
       <li class="nav-item">
         
         <Link to="/TOS" className="nav-link">Terms Of Service</Link> 
       </li>
       <li class="nav-item">
         
         <Link to="/signup" className="nav-link">Sign Up</Link> 
       </li>
        
      </ul>
    </div>
  </div>
</nav>


    );
}
export default Navbar;