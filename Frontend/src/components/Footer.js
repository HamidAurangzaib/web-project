import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="row mt-3" >
    <MDBFooter
      className="text-center text-lg-start text-muted"
      style={{ backgroundColor: "#C81262" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span style={{ color: "white" }}>
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <a href="" className="me-4 text-reset"></a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4 ml-4"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faHouse} />   

                           Rishta Karo
              </h6>
              <p style={{ color: "white" }}>
               Rishta Krny Ka Golden Chance. Ap Sab K Liye. Abi Join Krien
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "white" }}
              >
                Products
              </h6>
              <p style={{ color: 'white' }}>
        <Link to="/signup" className="text-reset">
          Register
        </Link>
      </p>
      <p style={{ color: 'white' }}>
        <Link to="/signin" className="text-reset">
          Login
        </Link>
      </p>
      <p style={{ color: 'white' }}>
        <Link to="/contact" className="text-reset">
          Contact Us
        </Link>
      </p>
      <p style={{ color: 'white' }}>
        <Link to="/about" className="text-reset">
          About Us
        </Link>
      </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "white" }}
              >
                Useful links
              </h6>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset" style={{ color: "white" }}>
                  Pricing
                </a>
              </p>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset" style={{ color: "white" }}>
                  Settings
                </a>
              </p>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset" style={{ color: "white" }}>
                  Orders
                </a>
              </p>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset" style={{ color: "white" }}>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "white" }}
              >
                Contact
              </h6>
              <p style={{ color: "white" }}>
                <i class="bi bi-house" style={{ color: "white" }}></i>
                New York, NY 10012, US
              </p>
              <p style={{ color: "white" }}>
                <MDBIcon
                  icon="envelope"
                  className="me-3 "
                  style={{ color: "white" }}
                />
                info@example.com
              </p>
              <p style={{ color: "white" }}>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p style={{ color: "white" }}>
                <MDBIcon
                  icon="print"
                  className="me-3"
                  style={{ color: "white" }}
                />{" "}
                + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "white" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}
