import img from './images/hamid-new.png';
import img1 from './images/arslan.jpg';
import img2 from './images/ch.jpg'


const carddata = [
  {
    Name: "Hamid",
    Age: "22",
    Description: "I am married",
   
  },
  {
    Name1: "Arslan",
    Age1: "21",
    Description1: "I am engaged",
  },
  {
    Name2: "Hussain",
    Age2: "17",
    Description2: "I am engaged",
  }
  

];
function Cards() {
  return (
    <div className='container'>
    <div className="row mt-3">
      <div className="col-md-4">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={img} alt="Card image cap" />
          <div class="card-body">
            {carddata.map((cd) => (
              <>
                <h5 class="card-title">{cd.Name}</h5>
                <p class="card-text"> {cd.Age} </p>
                <p class="card-text"> {cd.Description}</p>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-4 ">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={img2} alt="Card image cap" />
          <div class="card-body">
            {carddata.map((cd) => (
              <>
                <h5 class="card-title">{cd.Name1}</h5>
                <p class="card-text"> {cd.Age1} </p>
                <p class="card-text"> {cd.Description1}</p>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div class="card" style={{ width: "18rem" }}>
          <img class="card-img-top" src={img1} alt="Card image cap" />
          <div class="card-body">
            {carddata.map((cd) => (
              <>
                <h5 class="card-title">{cd.Name2}</h5>
                <p class="card-text"> {cd.Age2} </p>
                <p class="card-text"> {cd.Description2}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
