import React from "react";

import { GridProducts, Loading, Error, Typography } from ".";
import { useProductsContext } from "../contexts/products_context";


import styled from "styled-components";

const PopularProducts = () => {
  const {
    popular_products: products,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <Typography.H2>Popular Products</Typography.H2>
      <GridProducts products={products.slice(0, 3)} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;
  height: auto;

  h2 {
    margin-bottom: 3rem;
  }
`;

export default PopularProducts;
