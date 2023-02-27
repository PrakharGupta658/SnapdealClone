import { useEffect, useState } from "react";


function DropdownSort({PriceHandeler}) {
  const [price, setPrice] = useState();
  
  useEffect(()=>{
    if(price){
      console.log("option value is", price);
    }
  
  },[price])
    // console.log("option value is", price );
    PriceHandeler(price)
  return (
    <select
      id="dropdown-item-button"
      onChange={(e) => {
        setPrice(e.target.value);
      }}
      title="Sorted By"
      className="btn btn-primary"
      
      value={price}
    >
        <option>Sorted By</option>
      <option as="button" value="priceDec">
        Price high to Low
      </option>
      <option as="button" value="priceInc">
        Price low to high
      </option>
      <option as="button" value="priceRating">
        Short by rating
      </option>
    </select>
  );
}

export default DropdownSort;
