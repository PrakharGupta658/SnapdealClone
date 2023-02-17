import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";


function CardStructure() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h2 className="text-center mt-5">Your Cart is Empty</h2>;
  return (
    <>
      <h5 className="text-center m-5">
        Cart ({totalUniqueItems}) total Items: ({totalItems})
      </h5>

      <table className="table table-light table-hover m-5 ">
        <tbody>
          {items.map((item, index) => {
            {/* console.log("itm is" , item) */}
            return (
              <tr key={index}>
                <td>
                  <img src={item.image} style={{ height: "6rem" }} />
                </td>
                <td>{item.title}</td>
                <td>Price ₹({item.price})</td>
                <td>Quality ({item.quantity})</td>
                <td>
                  <button
                    className="btn btn-warning ms-2 ml-5"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                   -
                  </button>
                  <button
                    className="btn btn-warning ms-2 ml-4"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                 +
                  </button>
                  <button
                    className="btn btn-danger ms-2 mt-4"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove Item
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        
      <div className="col-auto ms-auto">
        <h2> Total Price : INR {cartTotal}</h2>
      </div>
      <div className="col-auto">
        <button className="btn btn-danger mb-2" onClick={() => emptyCart()}>
          Clear Cart
        </button>
       <a href="/payment">
        <button className="btn btn-primary m-2">Proccess To Payment</button>
        </a>
      </div>
    </>
  );
}

export default CardStructure;
