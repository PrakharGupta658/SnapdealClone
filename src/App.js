import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./Component/HomaPage";
import SnapNavbar from "./Component/Navbar";
import ProductContext, { FilterContext } from "./Component/Context";
import ProductListShow from "./Component/Product/ProductListShow";
import Footer from "./Component/Footer";
import DesignCard from "./Component/DesignCard";
import Cart from "./Component/Cart/Cart";
import { CartProvider } from "react-use-cart";
import PaymentPage from "./Component/Cart/PaymentPage";
import SpinnerLoding from "./Component/SpinnerLoding";
import SignUpPage from "./Component/LoginSignup/SignUpPage";
import LoginPage from "./Component/LoginSignup/LoginPage";
import LogOut from "./Component/LoginSignup/LogOut";
import Men from "./Component/FilterProduct/Men";
import Women from "./Component/FilterProduct/women";
import Electronics from "./Component/FilterProduct/electronic";
import Jewelery from "./Component/FilterProduct/Jewelery";

function App() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serchFilter, setSerchFilter] = useState();

  useEffect(() => {
    async function fetchBuses() {
      setIsLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      const productData = await response.json();
      setIsLoading(false);
      setProduct(productData);
    }
    fetchBuses();
  }, []);
  if (isLoading) {
    return <SpinnerLoding />;
  }

  const GetSerchValue =(e)=>{
    setSerchFilter(e);
    
  }

  return (
    <>
      <ProductContext.Provider value={product}>
        <BrowserRouter>
          <CartProvider>
            <SnapNavbar  SerchVal = {GetSerchValue} />

            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/productlist" element={<ProductListShow  filterSerchValue = {serchFilter} />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/payment" element={<PaymentPage />} />
              <Route exact path="/loginpage" element={<LoginPage />} />
              <Route exact path="/signuppage" element={<SignUpPage />} />
              <Route exact path="/logout" element={<LogOut />} />
              <Route exact path="/men" element={<Men/>} />
              <Route exact path="/women" element={<Women/>} />
              <Route exact path="/elecronic" element={<Electronics/>} />
              <Route exact path="/jewelery" element={<Jewelery/>} />
            </Routes>
          </CartProvider>
          <DesignCard />
          <Footer />
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  );
}

export default App;
export { ProductContext };
