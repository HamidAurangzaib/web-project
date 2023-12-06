import mat1 from "./images/section-img1.png"
import mat2 from "./images/section-img2.png"

function Section(){

    return(

<div className="section">
<div className="row mt-5" style={{backgroundColor:"#fff7fa"}}>
<div className="col-md-6">
<img src={mat1} class="card-img-top img-fluid" alt="..."  style={{imageResolution:400}} />

</div>
<div className="col-md-6 align-self-center">

<h1 className="head" style={{ fontSize:"46px", color: "#C81262",  fontFamily:"'Poppins', sans-serif"}}> Finding your perfect
match just got easy!</h1>
<span className="para" style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",color:"gray", fontSize:"20px"}}> Rishta.com helps you find the partner of your choice through its detailed AI based broadcasting filters.

</span>
</div>
</div>

<div className="row mt-5" style={{backgroundColor:"#fff7fa"}}>
<div className="col-md-6 align-self-center">

<h1 className="head" style={{ fontSize:"46px", color: "#C81262",  fontFamily:"'Poppins', sans-serif"}}> Finding your perfect
match just got easy!</h1>
<span className="para" style={{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",color:"gray", fontSize:"20px"}}>Dil Ka Rishta helps you find the partner of your choice through its detailed AI based broadcasting filters.

</span>
</div>
<div className="col-md-6">
<img src={mat2} class="card-img-top " alt="..."  style={{imageResolution:400}} />

</div>


</div>


</div>

    );
}
export default Section;