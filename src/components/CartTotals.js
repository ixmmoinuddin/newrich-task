import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "../components";
import { useCartContext } from "../contexts/cart_context";

import styled from "styled-components";
import Screen from "../styles/Screen";

const CartTotals = () => {
  const { total_items, total_price } = useCartContext();
  return (
    <Wrapper>
      <div>
        <Typography.H3 className="total__items">
          Total Items : <span>{total_items}</span>
        </Typography.H3>
        <br />
        <Typography.H4 className="total__price">
          Total Price : <span>${total_price.toFixed(2)}</span>
        </Typography.H4>
      </div>
      <hr />
      <Link
        to="/checkout"
        type="button"
        className="total__btn "
      >
        Checkout
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1rem 1.5rem;
  border-radius: var(--radius);
  border: 0.2rem solid var(--blue-color-1);

  ${Screen.lg`
  align-self: flex-start;
    `}

  .total__items {
    span {
      width: 12rem;
      text-align: center;
      display: inline-block;
      font-size: var(--fs-600);
      color: var(--blue-color-1);
    }
  }

  .total__price {
    span {
      width: 12rem;
      text-align: center;
      display: inline-block;
      color: var(--red-color-1);
      font-size: var(--fs-600);
    }
  }

  hr {
    border-bottom: 0.2rem solid var(--red-color-1);
    margin: 1.5rem 0;
  }

  .total__btn {
    background: var(--blue-color-1);
    width: 100%;
    padding: 0.5rem;
    color: var(--color-white);
    font-size: 1.4rem;
    display: inline-block;
    text-align: center;
    letter-spacing: 0.2rem;
    border: 0.2rem solid var(--blue-color-1);
    transition: var(--transition);
    &:hover {
      background: transparent;
      color: var(--red-color-1);
    }
  }
`;

export default CartTotals;
