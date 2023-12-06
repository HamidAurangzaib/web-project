import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact(){
    return(
    <div className="container-fluid mb-3">
        <Navbar/>

        <div class="container">
            <div className="row"style={{backgroundColor:"#fff7fa"}}>
                <div className="col-md-6">
        <h2 style={{ color: "#C81262",  fontFamily:"'Poppins', sans-serif"}}>Contact Us</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="subject">Subject:</label>
                <input type="text" class="form-control" id="subject" name="subject" required/>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
        
    </div>
    <div className="col-md-6 align-self-center">
        <h1 style={{fontSize:"46px", color: "#C81262",  fontFamily:"'Poppins', sans-serif"}}>Get In Touch With Us </h1>
        <span style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",color:"gray", fontSize:"20px"}}>Reach us out via phone or email.</span><br/>
        <span style={{fontFamily:"'Poppins', sans-serif",color: "#C81262", fontSize:"20px"}}> 042-111-111-357</span><br/>
        <span style={{fontFamily:"'Poppins', sans-serif",color: "#C81262", fontSize:"20px"}}>contact@dilkarishta.com</span>
    </div>
    </div>
   <Footer/>
    </div>
 </div>
        
       
    );
}
export default Contact;