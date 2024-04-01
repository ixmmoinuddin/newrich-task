import React from "react";
import { Link, NavLink } from "react-router-dom";

import { CartButtons, Icons } from ".";
import { links } from "../utils/constants";
import { useProductsContext } from "../contexts/products_context";

import styled from "styled-components";
import Screen from "../styles/Screen";

import NavLogo from "../assets/nav-logo.png";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext();

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <Link to="/" onClick={closeSidebar}>
            <img src={NavLogo} alt="Logo" width="160" height="48" />
          </Link>
          <button type="button" onClick={closeSidebar}>
            <Icons.FaTimesStyled />
          </button>
        </div>
        <nav className="sidebar__nav">
          <ul>
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : null)}
                  to={url}
                  onClick={closeSidebar}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar__cart">
          <CartButtons />
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Screen.md`
    display:none;
`}
  .sidebar {
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
    background: var(--bg-color-white);
    transform: translate(-120%);
    transition: var(--transition);
  }

  .show-sidebar {
    z-index: 999;
    transform: translate(0);
  }

  .sidebar-header {
    display: flex;
    padding: 0 2rem;
    align-items: center;
    height: var(--header-height);
    justify-content: space-between;
    background: var(--blue-color-2);
    box-shadow: 0 0 1rem 1rem var(--bg-color-white);
  }

  .sidebar__nav {
    a {
      display: block;
      padding: 1rem;
      font-size: var(--fs-600);
      &:hover {
        padding-left: 1.5rem;
      }
    }
    .active {
      color: var(--blue-color-1);
    }
  }

  .sidebar__cart {
    padding: 1rem;
    width: max-content;
  }
`;

export default Sidebar;
