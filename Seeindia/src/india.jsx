// eslint-disable-next-line no-unused-vars
import React from "react";
import r1 from "./image/IndiaMain.webp";
import r2 from "./image/Agra.jpg";
import r3 from "./image/Dwarka.jpg";
import r4 from "./image/Kullu Manali.jpg";
import r5 from "./image/Thiruvananthpuram.jpeg";
import like from "./image/like.png";
import "./india.css";
import axios from "axios"; // Import axios for making API requests

const India = () => {
  // Function to handle adding item to cart
  const handleAddToCart = async (itemName) => {
    const user1 = await localStorage.getItem("user");
    const user = user1 ? JSON.parse(user1) : null;

    console.log(user);
    axios
      .post("http://localhost:3000/addToCart", {
        itemName,
        Contry: "India",
        userId: user.user._id,
      })
      .then((response) => {
        console.log(response.data); // Log response from the backend
        // You can update the UI accordingly if needed
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  const handleAddToFavorite = async (itemName) => {
    const user1 = await localStorage.getItem("user");
    const user = user1 ? JSON.parse(user1) : null;

    console.log(user);
    axios
      .post("http://localhost:3000/addToFavorite", {
        itemName,
        Contry: "India",
        userId: user.user._id,
      })
      .then((response) => {
        console.log(response.data); // Log response from the backend
        // You can update the UI accordingly if needed
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  return (
    <div>
      <div className="product">
        <img src={r1} alt="r1" className="r1" height="400px" width="1325px" />
      </div>
      <div className="product-list">
        <li className="india-item">
          <a className="india" href="#">
            <img src={r2} alt="Agra" className="r2"  />
          </a>
          <h6>Agra</h6>
          <div className="price">
            Rs. 28,000
            <br/>
            <br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite("Agra")}/>
          </div>
          <button
            onClick={() => handleAddToCart("Agra")}
            className="add-to-cart"
          >
            Add to Cart
          </button>
        </li>

        <li className="india-item">
          <a className="india" href="#">
            <img src={r3} alt="Dwarka" className="r3" />
          </a>
          <h6>Dwarka</h6>
          <div className="price">
            Rs. 10,000
            <br/>
            <br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite("Dwarka")}/>
          </div>
          <button
            onClick={() => handleAddToCart("Dwarka")}
            className="add-to-cart"
          >
            Add to Cart
          </button>
        </li>

        <li className="india-item">
          <a className="india" href="#">
            <img src={r4} alt="Kullu Manali" className="r4" />
          </a>
          <h6>Kullu Manali</h6>
          <div className="price">
            Rs. 35,000
            <br/>
            <br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite("Kullu Manali")}/>
          </div>
          <button
            onClick={() => handleAddToCart("Kullu Manali")}
            className="add-to-cart"
          >
            Add to Cart
          </button>
        </li>

        <li className="india-item">
          <a className="india" href="#">
            <img src={r5} alt="Thiruvananthpuram" className="r5" />
          </a>
          <h6>Thiruvananthpuram</h6>
          <div className="price">
            Rs. 30,000
            <br/>
            <br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite("Thiruvananthpuram")} />
          </div>
          <button
            onClick={() => handleAddToCart("Thiruvananthpuram")}
            className="add-to-cart">Add to Cart
          </button>
        </li>
      </div>
    </div>
  );
};

export default India;
