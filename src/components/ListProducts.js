import React from "react";
import { Link } from "react-router-dom";

import { Button, Typography } from ".";
import { truncate } from "../utils/helpers";

import styled from "styled-components";

const ListProducts = ({ products }) => {
  return (
    <Wrapper>
      {products.map(({ title, image, id, price, description }) => (
        <article key={id}>
          <Link to={`/products/${id}`}>
            <div className="product__img">
              <img src={image} alt={title} />
            </div>
          </Link>
          <div className="product__info">
            <Link to={`/products/${id}`}>
              <Typography.H3>{title}</Typography.H3>
            </Link>
            <p className="price">${price}</p>
            <Typography.P>{truncate(description, 120)}</Typography.P>
            <Button variant="primary">
              <Link to={`/products/${id}`}>Details</Link>
            </Button>
          </div>
        </article>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  article {
    gap: 1.2rem;
    display: grid;
    padding: 1rem;
    background: #fff;
    transform: scale(1);
    margin-bottom: 1.5rem;
    border-radius: var(--radius);
    transition: var(--transition);
    grid-template-columns: auto 1fr;
    &:hover {
      box-shadow: 0 0 1rem 1rem var(--gray-color-2);
    }

    img {
      height: 20rem;
      object-fit: contain;
      width: min(25vw, 220px);
    }

    .product__info {
      gap: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h3 {
      min-height: 2.2rem;
      color: var(--blue-color-1);
    }

    .price {
      font-size: 1.8rem;
      color: var(--red-color-1);
    }

    button {
      width: max-content;
    }
  }
`;

export default ListProducts;
