// eslint-disable-next-line no-unused-vars
import React from "react";
import n1 from "./image/LMain.jpg";
import n2 from "./image/London Eye.jpg";
import n3 from "./image/Tower bridge.jpg";
import n4 from "./image/British Museum.jpg";
import n5 from "./image/Buckingham Palace.webp";
import like from "./image/like.png";
import "./london.css";
import axios from "axios";

const London = () => {
  // Function to handle adding item to cart
  const handleAddToCart = async (itemName) => {
    const user1 = await localStorage.getItem('user');
    const user = user1 ? JSON.parse(user1) : null;

    console.log(user);
    axios.post('http://localhost:3000/addToCart', {
      itemName,
      Contry: 'London',
      userId: user.user._id,
    })
    .then((response) => {
      console.log(response.data); // Log response from the backend
      // You can update the UI accordingly if needed
    })
    .catch((error) => {
      console.error('Error adding item to cart:', error);
    });
  };

  // Function to handle adding item to favorite
  const handleAddToFavorite = async (itemName) => {
    const user1 = await localStorage.getItem('user');
    const user = user1 ? JSON.parse(user1) : null;

    console.log(user);
    axios.post('http://localhost:3000/addToFavorite', {
      itemName,
      Contry: 'London',
      userId: user.user._id,
    })
    .then((response) => {
      console.log(response.data); // Log response from the backend
      // You can update the UI accordingly if needed
    })
    .catch((error) => {
      console.error('Error adding item to favorite:', error);
    });
  };

  return (
    <div>
      <div className="product">
        <img src={n1} alt="n1" className="n1" height="400px" width="1325px" />
      </div>

      <div className="product-list">
        <li className="london-item">
          <a className="london" href="#">
            <img src={n2} alt="London Eye" className="n2" />
          </a>
          <h6>London Eye</h6>
          <div className="price">
            Rs. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('London Eye')} />
          </div>
          <button onClick={() => handleAddToCart('London Eye')} className="add-to-cart">Add to Cart</button>
        </li>

        <li className="london-item">
          <a className="london" href="#">
            <img src={n3} alt="Tower Bridge" className="n3" />
          </a>
          <h6>Tower Bridge</h6>
          <div className="price">
            RS. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('Tower Bridge')} />
          </div>
          <button onClick={() => handleAddToCart('Tower Bridge')} className="add-to-cart">Add to Cart</button>
        </li>

        <li className="london-item">
          <a className="london" href="#">
            <img src={n4} alt="British Museum" className="n4" />
          </a>
          <h6>British Museum</h6>
          <div className="price">
            RS. 30,000
            <img src={like} alt="like" className="like" onClick={() => handleAddToFavorite('British Museum')} />
          </div>
          <button onClick={() => handleAddToCart('British Museum')} className="add-to-cart">Add to Cart</button>
        </li>

        <li className="london-item">
          <a className="london" href="#">
            <img src={n5} alt="Buckingham Palace" className="n5" />
          </a>
          <h6>Buckingham Palace</h6>
          <div className="price">Rs. 30,000</div>
          <button onClick={() => handleAddToCart('Buckingham Palace')} className="add-to-cart">Add to Cart</button>
        </li>
      </div>
    </div>
  );
};

export default London;
