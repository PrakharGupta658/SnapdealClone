import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FireBase";
import { ToastContainer, toast } from "react-toastify";

function LoginPage() {
  const Navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [BtnDisable, SetBtnDisable] = useState(false);

  const handelLoginAccount = () => {
    if (!data.email || !data.password) {
      setErrorMsg("!Please Enter email & password");
      return;
    }
    toast.success("LogIn Up Successfully.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    // console.log(data);
    SetBtnDisable(true);
    // this function return promise
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        // console.log(res);
        SetBtnDisable(false);
        Navigate("/");
      })
      .catch((err) => {
        // console.log("error===",err)
        SetBtnDisable(false);
        setErrorMsg(err);
      });
  };

  return (<>
    <div className="container-fluid nav_bg">
      <div className="row">
        {/* we use only 10 colum out of 12 and show in center */}
        <div className="col-10 mx-auto">
          <MDBContainer fluid className="p-3 my-5">
            <MDBRow>
              <MDBCol col="10" md="6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  class="img-fluid"
                  alt="Phone image"
                />
              </MDBCol>

              <MDBCol col="4" md="6">
                 <div className="d-flex justify-content-center mb-1">Please enter email & password to login</div>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  onChange={(event) =>
                    setData((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  onChange={(event) =>
                    setData((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }))
                  }
                />

                <div
                  className="d-flex justify-content-between mx-4 mb-4"
                  style={{ color: "red" }}
                >
                  {errorMsg}
                </div>

                <button type="button" className="btn btn-danger w-100 mb-4" style={{ height:"47px"}} onClick={handelLoginAccount}
                        disabled={BtnDisable}>Log In</button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">OR</p>
                </div>

                <NavLink to="/signuppage">
                <button type="button" className="btn btn-primary w-100 mb-4 h-" style={{backgroundColor:"#0D47A1", height:"47px"}}
                    >Sign Up</button>
                </NavLink>
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

export default LoginPage;
