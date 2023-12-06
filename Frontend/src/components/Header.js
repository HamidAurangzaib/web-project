import admin from "./images/admin.png"
import './admin.css';
function Header(){
    

    return(

        <div className="row">

        <div class="card text-center text" style={{backgroundColor:"#C81262",marginBottom:"10px",}}>
      
        <div class="text-center">
          <img src={admin} class="rounded" alt="" style={{ width: "70px", height: "70px"}} />
        </div>
        <div class="card-body">
        <h5 class="card-title"style={{color:"white"}}>Administrator</h5>
      </div>
    </div>
    </div>
    );
}
export default Header;