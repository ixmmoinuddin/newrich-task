import React from "react";

import { Typography, Button, Icons } from ".";
import { getUniqueValues } from "../utils/helpers";
import { useFilterContext } from "../contexts/filter_context";

import styled from "styled-components";

const Filters = () => {
  const {
    filters: { text, category, min_price, max_price, price },
    updateFilters,
    all_products: products,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(products, "category");

  if (products.length > 0) {
    return (
      <Wrapper>
        <div className="content">
          <form className="filter__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form__control">
              <input
                type="text"
                name="text"
                placeholder="Search"
                className="search__input"
                value={text}
                onChange={updateFilters}
              />
            </div>
            <div className="form__control">
              <div className="title__wrapper">
                <Typography.H4>Categories</Typography.H4>
                <Button
                  variant="secondary"
                  className="clear-btn"
                  onClick={clearFilters}
                >
                  <Icons.FaTrashStyled />
                </Button>
              </div>
              <div className="form__categories">
                {categories.map((c, index) => (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    className={category === c ? "active" : null}
                    onClick={updateFilters}
                    data-category={c}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="form__control">
              <Typography.H4>Price</Typography.H4>
              <p className="price">${price}</p>
              <input
                type="range"
                name="price"
                min={min_price}
                max={max_price}
                value={price}
                onChange={updateFilters}
              />
            </div>
          </form>
        </div>
      </Wrapper>
    );
  }
  return <div></div>;
};

const Wrapper = styled.div`
  margin-bottom: 2rem;

  .content {
    top: 7rem;
    position: sticky;
  }

  .filter__form {
    gap: 2rem;
    display: grid;
  }

  .search__input {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: var(--fs-400);
    background: var(--gray-color-2);
  }

  .form__control > *:not(:first-child) {
    margin-top: 1rem;
  }

  .title__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      color: var(--color-black);
    }
  }

  .form__categories {
    gap: 1rem;
    display: grid;
    justify-items: flex-start;

    button {
      padding-right: 0.5rem;
      font-size: var(--fs-400);
      color: var(--blue-color-1);
      text-transform: capitalize;
      transition: var(--transition);
      border-bottom: 0.3rem solid transparent;
      &:hover {
        padding-left: 0.5rem;
      }
    }

    .active {
      padding-left: 0.5rem;
      border-bottom-color: var(--blue-color-1);
    }
  }

  .price {
    color: var(--red-color-1);
    font-size: var(--fs-400);
  }

  .clear-btn {
    line-height: 0.5;
    padding: 2px 4px;
    
    svg {
      font-size: var(--fs-400);
    }

    &:hover svg {
      color: var(--color-white);
    }
  }
`;

export default Filters;
