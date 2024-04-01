import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Breadcrumb, CartItem } from "../components";
import { useCartContext } from "../contexts/cart_context";

import styled from "styled-components";
import Screen from "../styles/Screen";

const CheckoutPage = () => {
  const { cart, checkout } = useCartContext();
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  return (
    <main>
      <Breadcrumb title="Checkout" />
      <Wrapper className="page">
        <section className="checkout-section">
          <h2>Items In Your Cart</h2>
          <div className="cart__items">
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="shipping-details">
            <h3>Shipping Details</h3>
            <form>
              <input
                type="text"
                name="fullName"
                value={shippingDetails.fullName}
                onChange={handleShippingChange}
                placeholder="Full Name"
                required
              />
              <input
                type="text"
                name="address"
                value={shippingDetails.address}
                onChange={handleShippingChange}
                placeholder="Address"
                required
              />
              <input
                type="text"
                name="city"
                value={shippingDetails.city}
                onChange={handleShippingChange}
                placeholder="City"
                required
              />
              <input
                type="text"
                name="country"
                value={shippingDetails.country}
                onChange={handleShippingChange}
                placeholder="Country"
                required
              />
              <input
                type="text"
                name="postalCode"
                value={shippingDetails.postalCode}
                onChange={handleShippingChange}
                placeholder="Postal Code"
                required
              />
            </form>
          </div>
          <div className="payment-details">
            <h3>Payment Details</h3>
            <form>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentChange}
                placeholder="Card Number"
                required
              />
              <input
                type="text"
                name="expirationDate"
                value={paymentDetails.expirationDate}
                onChange={handlePaymentChange}
                placeholder="Expiration Date"
                required
              />
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentChange}
                placeholder="CVV"
                required
              />
            </form>
          </div>
          <Link
            to="/thankyou"
            type="button"
            className="checkout__btn "
            onClick={checkout}
          >
            Checkout
          </Link>
        </section>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .checkout-section {
    gap: 1rem;
    display: grid;
    margin-bottom: 16px;
    ${Screen.lg`
      grid-column: 1/3;
    `}
  }

  .cart__items {
    padding: 1rem;
  }

  .shipping-details,
  .payment-details {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .shipping-details h3,
  .payment-details h3 {
    margin-bottom: 0.5rem;
  }

  form {
    display: grid;
    gap: 0.5rem;
  }

  input {
    padding: 0.5rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  input:focus {
    outline: none;
    border-color: #333;
  }

  .checkout__btn {
    border-radius: 5px;
    text-align: center;
    padding: 0.75rem 2rem;
    color: var(--color-white);
    background-color: var(--blue-color-1);
  }
`;

export default CheckoutPage;
