// eslint-disable-next-line no-unused-vars
import React from 'react';
import b1 from './image/Main.jpg';
import b2 from './image/Zurich-Switzerland.webp';
import b3 from './image/Geneva.webp';
import b4 from './image/Interlaken.jpg';
import b5 from './image/Luzern.jpg';
import like from './image/like.png';
import axios from 'axios'; // Import axios for making API requests
import './switzerland.css';

const Switzerland = () => {
  // Function to handle adding item to cart
  const handleAddToCart = async (itemName) => {
    const user1 = await localStorage.getItem('user');
    const user = user1 ? JSON.parse(user1) : null;

    console.log(user);
    axios.post('http://localhost:3000/addToCart', {
      itemName,
      Contry: 'Switzerland',
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
      Contry: 'Switzerland',
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
        <img src={b1} alt="s1" className="b1" height={400} width={1500} />
      </div>

      <div className="product-list">
        <li className="swt-item">
          <a className="swt" href="#">
            <img src={b2} alt="Zurich-Switzerland" className="s2" />
          </a>
          <h6>Zurich-Switzerland</h6>
          <div className="price">
            Rs. 15,000<br/><br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite('Zurich-Switzerland')} />
          </div>
          <button onClick={() => handleAddToCart('Zurich-Switzerland')} className="add-to-cart">Add to Cart</button>
        </li>

        <li className="swt-item">
          <a className="swt" href="#">
            <img src={b3} alt="Geneva" className="b3" />
          </a>
          <h6>Geneva</h6>
          <div className="price">
            RS. 45,000<br/><br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite('Geneva')} />
          </div>
          <button onClick={() => handleAddToCart('Geneva')} className="add-to-cart">Add to Cart</button>
        </li>

        <li className="swt-item">
          <a className="swt" href="#">
            <img src={b4} alt="Interlaken" className="b4" />
          </a>
          <h6>Interlaken</h6>
          <div className="price">
            RS. 25,000<br/><br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite('Interlaken')} />
          </div>
          <button onClick={() => handleAddToCart('Interlaken')} className="add-to-cart">Add to Cart</button>
        </li>

        <li className="swt-item">
          <a className="swt" href="#">
            <img src={b5} alt="Luzern" className="b5" />
          </a>
          <h6>Luzern</h6>
          <div className="price">
            Rs. 7,000<br/><br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite('Luzern')} />
          </div>
          <button onClick={() => handleAddToCart('Luzern')} className="add-to-cart">Add to Cart</button>
        </li>
      </div>
    </div>
  );
};

export default Switzerland;
