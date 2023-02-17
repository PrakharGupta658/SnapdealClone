import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./ProductListCss.css";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { auth} from "../LoginSignup/FireBase";

function ProductList(props) {

  const [addToCart , setAddToCart] = useState(false);
  const [addToCart1 , setAddToCart1] = useState("ADD TO CART");

  useEffect(() => {
    auth.onAuthStateChanged((usrName) => {
      if(usrName) {
         setAddToCart(false)
      } else {
        setAddToCart(true)
        setAddToCart1("LogIn For Buy")
      }
    
    });
  }, []);

  const { addItem } = useCart();
  return (
    <>
      <MDBContainer fluid key={props.key}>
        <MDBRow className="justify-content-center mb-0" >
          <MDBCol md="12" xl="10">
            <MDBCard className="shadow-0 border rounded-3 mt-3 mb-1">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="12" lg="3" className="mb-5 mb-lg-0">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <MDBCardImage
                        src={props.prdImg}
                        fluid
                        className="w-100"
                        style={{ width: "140px", height: "200px" }}
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                  </MDBCol>
                  <MDBCol md="6">
                    <h5>{props.prdTitle}</h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                      </div>
                      <span>{props.prdRating}</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <span>{props.prdCategory}</span>
                      <span className="text-primary"> • </span>
                      <span>Light weight</span>
                      <span className="text-primary"> • </span>
                      <span>
                        Best finish
                        <br />
                      </span>
                    </div>
                    <div className="mb-2 text-muted small">
                      <span>Unique design</span>
                      <span className="text-primary"> • </span>
                      <span>For men</span>
                    </div>
                    <p className="text-truncate mb-4 mb-md-0">
                      {props.prdDescription}
                    </p>
                  </MDBCol>
                  <MDBCol
                    md="6"
                    lg="3"
                    className="border-sm-start-none border-start"
                  >
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">₹{""}{props.prdPrice}</h4>
                      <span className="text-danger">
                        <s>₹20.99</s>
                      </span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                      {/* <MDBBtn color="primary" size="sm">
                      Details
                    </MDBBtn> */}
                      <MDBBtn
                      disabled={addToCart}
                        outline
                        color="danger"
                        size="sm"
                        className="mt-2"
                        onClick={() => {
                          addItem(props.item);
                          toast.success(
                            `Your Item ${props.prdTitle} is successfully added to Cart`,
                            {
                              position: "top-center",
                              autoClose: 1900,
                              hideProgressBar: true,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                            }
                          );
                        }}
                      >
                        {addToCart1}
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <ToastContainer
        position="top-center"
        autoClose={1900}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default ProductList;
