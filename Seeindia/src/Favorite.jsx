import c1 from "./image/c1.png";
import "./cart.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Favorite = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        // const user = JSON.parse(localStorage.getItem("user"));
        const userId = "65fd929183ee60240304ffa9";
        const response = await axios.get(
          `http://localhost:3000/FavoriteItems/${userId}`
        );
        setCartItems(response.data.FavoriteItems);
        console.log(response.data.FavoriteItems);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemName) => {
    try {
      //   const user = JSON.parse(localStorage.getItem("user"));
      const userId = "65fd929183ee60240304ffa9";
      await axios.delete(
        `http://localhost:3000/removeFromFavorite/${userId}/${itemName}`
      );
      // Update cart items after removing the item
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.itemName !== itemName)
      );
    } catch (error) {
      console.error("Error removing item from Favorite:", error);
    }
  };
  return (
    <>
      <div>
        <h2>Wish List Items</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.itemName}>
              <span>
                Country: {item.Contry}, City: {item.itemName}
              </span>
              <button onClick={() => handleRemoveItem(item.itemName)}>
                Remove
              </button>
              <br/>
            </li>
          ))}
        </ul>
      </div>
    </>

    // <div className="product">
    //     <table>
    //     <tr>
    //      <img src={c1
    //     } alt='c1' className='c1'  />
    //     </tr>
    //     <tr>
    //      <p><b><h1>Your Cart is empty </h1></b></p>
    //      <p><b><h1>Lets fill it up with jewellery</h1></b></p>
    //     </tr>
    //     </table>
    //     </div>
  );
};
export default Favorite;
