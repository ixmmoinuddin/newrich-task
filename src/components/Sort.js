import React from "react";

import { Typography, Icons } from ".";
import { useFilterContext } from "../contexts/filter_context";


import styled from "styled-components";
import Screen from "../styles/Screen";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    updateSort,
    sort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className='sort__btns'>
        <button
          type='button'
          onClick={setGridView}
          className={grid_view ? "active" : null}
        >
          <Icons.BsFillGridFillStyled />
        </button>
        <button
          type='button'
          onClick={setListView}
          className={!grid_view ? "active" : null}
        >
          <Icons.BsListStyled />
        </button>
      </div>
      <Typography.P className='sort__items'>
        <span>{products.length}</span> items found
      </Typography.P>

      <form className='sort__form'>
        <label htmlFor='sort'>sort by :</label>
        <select
          name='sort'
          id='sort'
          className='sort__input'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  ${Screen.sm`
        gap:0 1rem;
    `}

  .sort__btns {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      padding: 0.2rem;
      align-items: center;
      margin-right: 0.3rem;
      display: inline-block;
      justify-content: center;
      ${Screen.md`
        padding: 0.5rem;
      `}
    }
  }

  .sort__items {
    font-size: 1.3rem;
    span {
      display: inline-block;
      min-width: 2rem;
      text-align: center;
      color: var(--blue-color-1);
    }
  }

  .sort__form {
    margin-left: auto;
    label {
      margin-right: 0.2rem;
      font-size: var(--fs-400);
      color: var(--blue-color-1);
    }
    option {
      padding: 1rem;
      font-size: var(--fs-600);
      background: var(--bg-color-white);
    }
  }

  .active {
    border-radius: 0.3rem;
    border: 0.2rem solid var(--blue-color-1);
  }
`;

export default Sort;
