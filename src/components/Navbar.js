import React from "react";
import { NavLink, Link } from "react-router-dom";

import { Icons } from ".";
import { CartButtons } from "./index";
import { links } from "../utils/constants";
import { useProductsContext } from "../contexts/products_context";

import styled from "styled-components";
import Screen from "../styles/Screen";

import NavLogo from "../assets/nav-logo.png";


const Navbar = () => {
  const { openSidebar } = useProductsContext();
  return (
    <Header>
      <div className="header-center">
        <Link to="/">
          <img src={NavLogo} alt="Logo" width="160" height="48" />
        </Link> 
        <nav className="header__nav">
          <ul>
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <NavLink
                  to={url}
                  className={({ isActive }) => (isActive ? "active" : null)}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__cart">
          <CartButtons />
        </div>
        <button type="button" onClick={openSidebar} className="header__btn">
          <Icons.FaBarsStyled />
        </button>
      </div>
    </Header>
  );
};

const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  position: fixed;
  align-items: center;
  padding: 2rem;
  height: var(--header-height);
  background: var(--bg-color-white);
  box-shadow: 0px 0px 12px -8px var(--bg-color-black);

  .header-center {
    display: flex;
    padding: 12px;
    margin-inline: auto;
    align-items: center;
    justify-content: space-between;
    width: min(100%, var(--max-width));
  }

  .header__btn {
    ${Screen.md`
      display:none;
      `}
  }

  .header__nav {
    display: none;
    ${Screen.md`
      display:inline-block;
      `}

    ul {
      display: inline-flex;
      gap: 2.5rem;

      a {
        padding: 0.2rem;
        display: inline-block;
        font-size: var(--fs-500);
        border-bottom: 0.2rem solid transparent;
      }

      .active {
        border-bottom-color: var(--gray-color-1);
      }
    }
  }

  .header__cart {
    display: none;
    ${Screen.md`
      display:inline-block;
      `}
  }
`;

export default Navbar;
