import React from "react";
import img from "./images/hamid-new.png";

import Section3 from "./Section3";

const carddata = [
  {
    id: 1,
    Name: "Hamid",
    Age: "22",
    Description: "I am married",
  },
  {
    id: 2,
    Name: "Arslan",
    Age: "21",
    Description: "I am engaged",
  },
  {
    id: 3,
    Name: "Hussain",
    Age: "17",
    Description: "I am engaged",
  },
  {
    id: 4,
    Name: "Luqman",
    Age: "37",
    Description: "I am not engaged",
  },
  {
    id: 5,
    Name: "Usman",
    Age: "21",
    Description: "I am engaged",
  },
  {
    id: 6,
    Name: "Ali",
    Age: "17",
    Description: "I am engaged",
  },
];

function Rishtaas() {
  const commonTextStyle = {
    fontSize: "26px",
    color: "white",
    fontFamily: "Merriweather Sans",
  };
  const commonTextStyle2 = {
    fontSize: "18px",
    color: "#F1F1F1",
    fontFamily: "Merriweather Sans",
  };

  return (
    <>
    <div className="container-fluid" style={{ border: "2px solid red" }}>
      <div className="row">
        <div className="col-md-9">
        <div className="row row1">
        {carddata.map((cd) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mt-3" key={cd.id}>
            <div className="card">
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div
                className="card-body"
                style={{ backgroundColor: "rgb(184, 18, 91)" }}
              >
                <h5 className="card-title" style={commonTextStyle}>
                  Name: {cd.Name}
                </h5>
                <p className="card-text" style={commonTextStyle2}>
                  Age: {cd.Age}
                </p>
                <p className="card-text" style={commonTextStyle2}>
                  Description: {cd.Description}
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>

        <div className="col-md-3" style={{ border: "2px solid red" }}>
          <Section3/>
        </div>
      </div>



      {/* <div className="col-md-3" style={{ border: "1px solid black" }}></div> */}
    </div>
    </>
  );
}

export default Rishtaas;
