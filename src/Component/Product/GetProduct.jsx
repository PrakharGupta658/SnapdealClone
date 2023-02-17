import React, { createContext, useContext, useEffect, useState } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import Product from "./Product";
import { MDBContainer, MDBCard, MDBRow, MDBCol } from "mdb-react-ui-kit";
import ProductContext from "../Context";

function GetProduct() {
  const product = useContext(ProductContext);
  return (
    <>
      <MDBContainer fluid className="my-5 text-center">
        <h4 className="mt-4 mb-5">
          <strong>Bestsellers</strong>
        </h4>

        <div className="row gy-4">
          {product.map((prdt) => {
            console.log("product is", prdt);
            if (prdt.id < 7)
              return (
                <Product
                  prdID={prdt.id}
                  prdCategory={prdt.category}
                  prdPrice={prdt.price}
                  prdImg={prdt.image}
                  prdRating={prdt.rating.rate}
                  prdTitle={prdt.title}
                />
              );
          })}
        </div>
      </MDBContainer>
    </>
  );
}

export default GetProduct;
