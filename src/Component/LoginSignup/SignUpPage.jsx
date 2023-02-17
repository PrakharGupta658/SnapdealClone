import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./FireBase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpPage() {
  const Navigate = useNavigate();

  const [data, setData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [BtnDisable, SetBtnDisable] = useState(false);

  const handelCreateAccount = () => {
    if (!data.Fname || !data.Lname || !data.email || !data.password) {
      setErrorMsg("!All fields are mandatory ");
      return;
    }
    toast.success("Sign Up Successfully.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    SetBtnDisable(true);
    // this function return promise
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async(res) => {
        // console.log(res);
        SetBtnDisable(false);
        const user = res.user;
      await updateProfile(user, {
          displayName: data.Fname,
        });
        Navigate("/");
      })
      .catch((err) => {
        // console.log("error===",err)
        SetBtnDisable(false);
        setErrorMsg(err);
      });
  };

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          {/* we use only 10 colum out of 12 and show in center */}
          <div className="col-10 mx-auto">
            <MDBContainer fluid className="p-4">
              <MDBRow>
                <MDBCol
                  md="6"
                  className="text-center text-md-start d-flex flex-column justify-content-center"
                >
                  <h1 className="my-5 display-3 font-weight-bold ls-tight px-3">
                    Create Account
                    <br />
                    <span className="text-danger">
                    Snapdeal
                    </span>
                  </h1>

                  <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Snapdeal is India's leading pure-play value Ecommerce platform. Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment of good quality and value- priced merchandise on its platform. Snapdeal's vision is to enable the shoppers of Bharat to experience the joy of living their aspirations through reliable, value-for-money shopping. With a personalized, multilingual interface and cutting edge technology, Snapdeal has simplified the shopping experience for its value-conscious buyers by showcasing the most relevant products
                  </p>
                </MDBCol>

                <MDBCol md="6">
                  <MDBCard className="my-5">
                    <MDBCardBody className="p-5">
                      <h2 className="d-flex justify-content-center mb-5">
                        Create Account
                      </h2>
                      <MDBRow>
                        <MDBCol col="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            label="First name"
                            id="form1"
                            onChange={(event) =>
                              setData((prev) => ({
                                ...prev,
                                Fname: event.target.value,
                              }))
                            }
                            type="text"
                          />
                        </MDBCol>

                        <MDBCol col="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Last name"
                            id="form1"
                            onChange={(event) =>
                              setData((prev) => ({
                                ...prev,
                                Lname: event.target.value,
                              }))
                            }
                            type="text"
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Email"
                        id="form1"
                        onChange={(event) =>
                          setData((prev) => ({
                            ...prev,
                            email: event.target.value,
                          }))
                        }
                        type="email"
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        id="form1"
                        onChange={(event) =>
                          setData((prev) => ({
                            ...prev,
                            password: event.target.value,
                          }))
                        }
                        type="password"
                      />
                      <div
                        className="d-flex justify-content-center mb-4"
                        style={{ color: "red" }}
                      >
                        {errorMsg}
                      </div>
                      {/* <MDBBtn
                        className="w-100 mb-4"
                        size="md"
                        onClick={handelCreateAccount}
                        disabled={BtnDisable}
                      >
                        sign up
                      </MDBBtn> */}
                      <button type="button" className="btn btn-danger w-100 mb-4" onClick={handelCreateAccount}
                        disabled={BtnDisable}>Sign Up</button>

                      {/* <div className="text-center">
                      <p>or sign up with:</p>
                      <MDBBtn
                        tag="a"
                        color="none"
                        className="mx-3"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fab icon="google" size="sm" />
                      </MDBBtn>

                    </div> */}
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default SignUpPage;
