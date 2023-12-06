import pic1 from "./images/pic1.jpg"
import bride from "./images/bride-1255520_1920.jpg"
import pic3 from "./images/couple-2162950_1920.jpg"
import Text from "./Text";
import "./Text.css"





function Carosel(){

    return(
      
        
      <div className="row" style={{backgroundColor:"#fff7fa"}}>
        <div className="col-sm-5 align-self-center">
          <Text/>
        </div>
        <div className="col-sm-7">
      
        
        
<div id="carouselExampleCaptions" class="carousel slide carousel-fade rounded h-10" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bride} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-center d-flex align-items-center justify-content-center ">
        <h5 style={{ fontSize:"46px", color: "#C81262",  fontFamily:"'Poppins', sans-serif"}}>Shaadi Mubarakh</h5>
        <p>Mazy Kro.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{ fontSize:"46px", color: "#C81262",  fontFamily:"'Poppins', sans-serif"}}>Aj Apna Rishta Kro</h5>
        <p>Bandhan ma Band Jao</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{ fontSize:"46px", color: "#C81262",  fontFamily:"'Poppins', sans-serif"}}>Shaadi Ki Khushiyan</h5>
        <p>Verified Users k Sath Apna Rishta Jorien</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
    );
}
export default Carosel;