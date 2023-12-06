import mat1 from "./images/section-img1.png"
import mat3 from "./images/new-section-img3.png"
function Section3(){
return(
<div className="section">
<div className="row mt-5" style={{backgroundColor:"#fff7fa"}}>
<div className="col-md-6">
<img src={mat3} class="card-img-top" alt="..."  style={{imageResolution:400}} />

</div>
<div className="col-md-6 align-self-center">

<h1 className="head" style={{ fontSize:"46px", color: "#C81262",  fontFamily:"'Poppins', sans-serif"}}> Get Verified
!</h1>
<span className="para" style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",color:"gray", fontSize:"20px"}}>Create your profile on  Rishta.com and get yourself verified to have access to unlimited 100% verified profiles every day.



</span>
</div>
</div>


</div>


);

}
export default Section3;