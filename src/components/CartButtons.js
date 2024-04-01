import React from "react";
import { NavLink } from "react-router-dom";

import { Icons } from ".";
import { useCartContext } from "../contexts/cart_context";
import { useProductsContext } from "../contexts/products_context";

import styled from "styled-components";


const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();

  return (
    <Wrapper>
      <NavLink
        to='/cart'
        onClick={closeSidebar}
        className={({ isActive }) =>
          isActive ? "cart__container active" : "cart__container"
        }
      >
        <div className='cart-icon'>
          <Icons.FaShoppingCartStyled />
          <span>{total_items}</span>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: var(--fs-500);
  }

  .cart__container {
    display: flex;
    margin-right: 3rem;
    border-bottom: 0rem solid transparent;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .active {
    border-color: transparent;
  }
  
  .cart-icon {
    width: 48px;
    height: 48px;
    display: flex;
    line-height: 1;
    position: relative;
    border-radius: 100%;
    margin-left: 0.4rem;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    background-color: var(--blue-color-1);

    span {
      top: -4px;
      right: 0px;
      display: flex;
      padding: 0.2rem;
      min-width:1.5rem;
      font-size: 1rem;
      position: absolute;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      color: var(--color-white);
      background-color: var(--red-color-1);
    }
  }
`;

export default CartButtons;
