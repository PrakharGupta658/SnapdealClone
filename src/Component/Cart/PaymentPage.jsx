import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

export default function PaymentPage() {
  const [cartAmount , setCartAmount] = useState();

  const {
    items,
    cartTotal,
    
  } = useCart();


  useEffect(()=>{
    setCartAmount(cartTotal + cartTotal*.05);
    console.log("amount" , cartAmount);
    
  })
  
  

  // const [gst , setGst] = useState();
  console.log("items issss", items);
  return (
    <MDBContainer className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex flex-row align-items-center">
          <h4 className="text-uppercase mt-1">Snap</h4>
          <span className="ms-2 me-3">Pay</span>
        </div>
        <NavLink to="/">Cancel and return to the home</NavLink>
      </div>
      <MDBRow>
        <MDBCol md="7" lg="7" xl="6" className="mb-4 mb-md-0">
          {items.map((itm) => {
            return (
              <h6 className="mb-3">
                {itm.title} price ₹({itm.price})
              </h6>
            );
          })}
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row mt-1">
                <h6>Total Amount </h6>
                <h5 className="fw-bold text-success ms-1">₹{cartTotal}</h5>
              </div>
              <div className="d-flex flex-row align-items-center text-primary">
                <span className="ms-1">Add Insurer card</span>
              </div>
            </div>
            <p>
              Insurance claim and all neccessary dependencies will be submitted
              to your insurer for the covered portion of this order.
            </p>

            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-4">
                <MDBRow className="d-flex align-items-center">
                  <MDBCol size="9">
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      placeholder="1234 5678 9012 3457"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <img
                      src="https://img.icons8.com/color/48/000000/visa.png"
                      alt="visa"
                      width="64px"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <MDBInput
                      label="Cardholder's Name"
                      id="form2"
                      type="text"
                      placeholder="Cardholder's Name"
                    />
                  </MDBCol>

                  <MDBCol size="6">
                    <MDBInput
                      label="Expiration"
                      id="form2"
                      type="text"
                      placeholder="MM/YYYY"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <MDBInput
                      label="CVV"
                      id="form2"
                      type="text"
                      placeholder="&#9679;&#9679;&#9679;"
                    />
                  </MDBCol>
                  <MDBCol size="3">
                    <NavLink to="/cart">
                      <MDBBtn color="info" rounded size="lg">
                        <MDBIcon fas icon="arrow-left" /> return
                      </MDBBtn>
                    </NavLink>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBBtn color="success" size="lg" block>
              Proceed to payment
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="5" lg="4" xl="5" offsetLg="1" offsetXl="2">
          <div className="p-3" style={{ backgroundColor: "#eee" }}>
            <span className="fw-bold">Order Recap</span>
            <div className="d-flex justify-content-between mt-2">
              <span>Item Price</span> <span>{items.Price}</span>
            </div>
            {items.map((itm) => {
              return (
                <div className="d-flex justify-content-between mt-2">
                  <span>{itm.title}</span> <span>₹{itm.price}</span>
                </div>
              );
            })}

            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span>GST</span> <span>{cartTotal*.05}</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Shipping Charge</span> <span>₹0</span>
            </div>

            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span>Total </span> <span class="text-success">{cartAmount}</span>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
