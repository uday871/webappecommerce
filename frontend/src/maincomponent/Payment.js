import React from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const { product, quantity } = location.state || {};

  if (!product) {
    return <p className="no-product">No product selected.</p>;
  }

  return (
    <div className="paymentcontainer">
    <div className="payment-view">
      <h1 className="page-title" style={{fontFamily:'Twentieth Century sans-serif'}}>Payment</h1>
      <div className="product-detailss">

        <div className="product-image-container">
          <img src={`https://webappecommerceapp.onrender.com/${product.frontImage}`} alt={product.title} className="product-image" style={{height:'100%',width:'100%',borderRadius:'20px'}}/>
        </div>

        <div className="details" style={{marginTop:''}}>
          <h3 className="product-title">{product.title}</h3>
          <p className="price">Price: Rs.{product.price}</p>
          <p className="quantity">Quantity: {quantity}</p>
          <p className="total">Total: Rs.{product.price * quantity}</p>
        </div>

        <div className="details" style={{marginTop:'10%'}}>
          <h3 className="">Location</h3>
        </div>
      </div>

      <div className="twobtn" style={{display:'flex'}}> 
        <button className="proceed-to-cancle" style={{backgroundColor:'red'}}>Cancle</button>
        <button className="proceed-to-payment">Select Payment Method </button>
      </div>
    </div>
    </div>
  );
};

export default Payment;
