import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./LoginSignup/FireBase";
import { Link } from "react-router-dom";

export default function ProfileCard() {


  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [login, setLogin] = useState("Login");
  const [login1, setLogin1] = useState("login");
  useEffect(() => {
    auth.onAuthStateChanged((usrName) => {
       
      if (usrName) {
        setUserName(usrName.displayName);
        setUserEmail(usrName.email);
        setLogin("Log Out")
        setLogin1("/logout")
        // console.log("user name is ==", userName);      
      } else {
        setUserName("Please Login");
        setLogin("Log In")
        setLogin1("/loginpage")
      }
    });
  }, []);

  return (
    <MDBCard style={{ borderRadius: "15px" }}>
      <MDBCardBody className="text-center">
        <div className="mt-3 mb-4">
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
            className="rounded-circle"
            fluid
            style={{ width: "100px" }}
          />
        </div>
        <MDBTypography tag="h4">Hey! {userName}</MDBTypography>
        <MDBCardText className="text-muted mb-4">
        {userEmail} <span className="mx-2">|</span>{" "}
          <a href="#!">snapdeal.com</a>
        </MDBCardText>
        <Link to={login1}>
        <MDBBtn rounded size="lg" className="bg-danger">
          {login}
        </MDBBtn>
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
}
