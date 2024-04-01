import React from "react";
import { Link } from "react-router-dom";

import { Stars, Typography } from ".";
import { truncate } from "../utils/helpers";

import styled from "styled-components";
import Screen from "../styles/Screen";


const GridProducts = ({ products }) => {
  return (
    <Wrapper>
      {products.map(({ title, id, image, price, rating }) => (
        <article key={id}>
          <Link to={`/products/${id}`}>
            <img src={image} alt={title} />
          <Typography.H3 title={title}>{truncate(title, 25)}</Typography.H3>
          </Link>
          <div>
            <p>${price}</p>
            <Stars stars={rating} />
          </div>
        </article>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 2rem 1.5rem;
  justify-content: center;

  ${Screen.md`
  grid-template-columns: 1fr 1fr;
`}
  ${Screen.xl`
  grid-template-columns: 1fr 1fr 1fr ;
`}

article {
    padding: 1rem;
    background: var(--color-white);
    border-radius: var(--radius);
    transition: var(--transition);

    &:hover {
      box-shadow: 0 0 1rem 1rem var(--gray-color-2);
    }

    a {
      display:block;
      text-align: center;
    }

    h3 {
      margin: 1rem 0;
      text-align: left;
      min-height: 2.4rem;
    }
    img {
      max-height: 15rem;
      object-fit: contain;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p {
      font-size: 1.8rem;
      color: var(--red-color-1);
    }
  }
`;

export default GridProducts;
