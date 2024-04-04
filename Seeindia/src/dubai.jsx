import React from 'react';
import e1 from './image/DMain.jpg';
import e2 from './image/Dubai Fountain.jpg';
import e3 from './image/Dubai Frame.webp';
import e4 from './image/Dubai Sightseeing.webp';
import e5 from './image/Burj Khalifa.jpg';
import like from './image/like.png';
import axios from 'axios'; // Import axios for making API requests
import './dubai.css';

const Dubai = () => {
  // Function to handle adding item to cart
  const handleAddToCart = async (itemName) => {
    const user1 = await localStorage.getItem('user');
    const user = user1 ? JSON.parse(user1) : null;

    console.log(user);
    axios.post('http://localhost:3000/addToCart', {
      itemName,
      Contry: 'Dubai',
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
      Contry: 'Dubai',
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
        <img src={e1} alt="e1" className="e1" height="400px" width="1325px" />
      </div>

      <div className="product-list">
        <li className="dubai-items">
          <a className="dubai" href="#">
            <img src={e2} alt="Dubai Fountain" className="e2" />
          </a>
          <h6>Dubai Fountain</h6>
          <div className="price">
            Rs. 17,500<br/><br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite('Dubai Fountain')} />
          </div>
          <button onClick={() => handleAddToCart('Dubai Fountain')} className="add-to-cart">Add to Cart</button>
        </li>

        <li className="dubai-items">
          <a className="dubai" href="#">
            <img src={e3} alt="Dubai Frame" className="e3" />
          </a>
          <h6>Dubai Frame</h6>
          <div className="price">
            RS. 19,500<br/><br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite('Dubai Frame')} />
          </div>
          <button onClick={() => handleAddToCart('Dubai Frame')} className="add-to-cart">Add to Cart</button>
        </li>

        <li className="dubai-items">
          <a className="dubai" href="#">
            <img src={e4} alt="Dubai Sightseeing" className="e4" />
          </a>
          <h6>Dubai Sightseeing</h6>
          <div className="price">
            RS. 25,000<br/><br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite('Dubai Sightseeing')} />
          </div>
          <button onClick={() => handleAddToCart('Dubai Sightseeing')} className="add-to-cart">Add to Cart</button>
        </li>

        <li className="dubai-items">
          <a className="dubai" href="#">
            <img src={e5} alt="Burj Khalifa" className="e5" />
          </a>
          <h6>Burj Khalifa</h6>
          <div className="price">
            Rs. 25,000<br/><br/>
            <img src={like} alt="like" className="l" onClick={() => handleAddToFavorite('Burj Khalifa')} />
          </div>
          <button onClick={() => handleAddToCart('Burj Khalifa')} className="add-to-cart">Add to Cart</button>
        </li>
      </div>
    </div>
  );
};

export default Dubai;
