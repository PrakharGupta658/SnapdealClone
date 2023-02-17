import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./FireBase";
import { useNavigate } from "react-router-dom";

function LogOut() {
    const Navigate = useNavigate();

    const handleLogOut=()=>{
        signOut(auth).then(() => {
              Navigate("/")
            }).catch((error) => {
              // An error happened.
            });
    }
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          {/* we use only 10 colum out of 12 and show in center */}
          <div className="col-10 mx-auto">

            <div className="card text-center">
              <div className="card-header">Thanks for visiting Snapdeal</div>
              <div className="card-body">
                <h5 className="card-title">Are you sure you want to log out?</h5>
                <a  className="btn btn-danger" onClick={handleLogOut} >
                  LogOut
                </a>
              </div>
              <div className="card-footer text-muted"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogOut;
