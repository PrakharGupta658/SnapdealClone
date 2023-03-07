import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CartProvider } from "react-use-cart";
import ProductContext from "../Context";
import LeftBar from "../LeftBar";
import ProductList from "./ProductList";
import DropdownSort from "./DropDown";

function ProductListShow(props) {
  const [price, setPrice] = useState();
  const [sortedProduct, setSortedProduct] = useState([]);


  const product = useContext(ProductContext);
  const GetPrice = (e) => {
    setPrice(e);
    // console.log("price is", price);
  };
  
  // console.log("serch valye is",props.filterSerchValue); 

  useEffect(() => {
    let sorted = [...product];
    console.log("price is" , price);
    if (price === "priceInc") {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (price === "priceDec") {
      sorted = sorted.sort((a, b) => b.price - a.price);
    }else if(price === "priceRating"){
      sorted = sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    if (props.filterSerchValue) {
      sorted = sorted.filter((p) => p.title.toLowerCase().includes(props.filterSerchValue));
    }
    setSortedProduct(sorted);
  }, [product, price , props.filterSerchValue]);

 
  return (
    <>
      <Container>
        <h4 className="mt-4 mb-2">
          <strong className="d-flex justify-content-center">
            Product List
          </strong>
          <div
            className="d-flex justify-content-end"
            style={{ margin: "auto 0px" }}
          >
            <DropdownSort PriceHandeler={GetPrice} />
          </div>
        </h4>
        <Row>
          <Col sm={2}>
            <LeftBar />
          </Col>
          <Col sm={10}>
            {sortedProduct.map((prdt, idx) => {
              {
                return (
                  <CartProvider key={idx}>
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

export default ProductListShow;
