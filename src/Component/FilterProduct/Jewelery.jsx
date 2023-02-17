import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CartProvider } from "react-use-cart";
import ProductContext from "../Context";
import LeftBar from "../LeftBar";
import ProductList from "../Product/ProductList";
import DropdownSort from "../Product/DropDown";
import { useNavigate } from "react-router-dom";

function Jewelery() {


  // const [filterState, setFilterState] = useState("");
  const [price, setPrice] = useState();
  // const navigate = useNavigate();

  // const HandelFilter = (e) => {
  //   setFilterState(e);
  //   navigate("/productlist");
  // };
  //  console.log("handelfileter value " , filterState);

  const product = useContext(ProductContext);


  const GetPrice=(e)=>{
       setPrice(e);
       console.log("price is" , price);
  }
     

  return (
    <>
      <Container>
        <h4 className="mt-5 mb-3">
          <strong className="d-flex justify-content-center">
            Product List
          </strong>
          <div
            className="d-flex justify-content-end"
            style={{ margin: "auto 0px" }}
          >
            <DropdownSort  PriceHandeler = { GetPrice} />
          </div>
        </h4>
        <Row>
          <Col sm={2}>
           
            <LeftBar/>
          </Col>
          <Col sm={10}>
            {product.map((prdt, idx) => {
              if(prdt.category === "jewelery")
            {
                return (
                  <CartProvider>
                    <ProductList
                      key={idx}
                      item={prdt}
                      prdID={prdt.id}
                      prdCategory={prdt.category}
                      prdPrice={prdt.price}
                      prdImg={prdt.image}
                      prdRating={prdt.rating.rate}
                      prdTitle={prdt.title}
                      prdDescription={prdt.description}
                    />
                  </CartProvider>
                );
              }
            })}

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Jewelery;
