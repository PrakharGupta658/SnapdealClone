import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

export default function SpinnerLoding() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
       <MDBSpinner grow color='danger'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
    </div>
  );
}