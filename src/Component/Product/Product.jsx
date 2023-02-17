import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function Product(props) {
  return (
    <>
      <MDBCol md="12" lg="4" className="mb-4">
        <MDBCard style={{ width: "300px", height: "450px" }}>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom"
          >
            <MDBCardImage
              src={props.prdImg}
              fluid
              className="w-100"
              style={{ width: "120px", height: "250px" }}
            />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-primary ms-2">
                      {props.prdRating}
                    </span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <a href="#!" className="text-reset">
              <h5 className="card-title mb-3">{props.prdTitle}</h5>
            </a>
            <a href="#!" className="text-reset">
              <p>{props.prdCategory}</p>
            </a>
            <h6 className="mb-3">{props.prdPrice}</h6>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
}

export default Product;
