import Screen from "./Screen";
import { createGlobalStyle } from "styled-components";

import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`
  /* variables  */
  :root {

    /** colors */
    --blue-color-1: #46a6ff;
    --blue-color-2: ##F4F9FE;
    
    --red-color-1: #e11d48;
    
    --green-color-1: #155e75;
    
    --yellow-color-1: #ffff00;
    --yellow-color-2: #ffa200;
    
    --gray-color-1: #6b7280;
    --gray-color-2: #d6d7da41;
    
    --color-white: #ffffff;
    --bg-color-white: #ffffff;

    --color-black: #000000;
    --bg-color-black: #000000;

    /** sizes */
    --max-width: 1300px;
    --header-height: 7rem;
    --footer-height: 5rem;
    --breadcrumb-height: 5rem;

    /** styles */
    --radius: 0.35rem;
    --transition: 0.3s;


    /* font-sizes */
    --fs-900: 9.375rem;
    --fs-800: 3rem;
    --fs-700: 2.5rem;
    --fs-600: 2rem;
    --fs-500: 1.62rem;
    --fs-400: 1.425rem;
    --fs-300: 1rem;
    --fs-200: 0.875rem;
  }

  /* resets */
  * {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background: none;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  /*? typography */
  html {
    font-size: 0.525rem;
    
    ${Screen.sm`
      font-size: 0.562rem;
    `}

    ${Screen.md`
      font-size: 0.625rem;
    `}

    ${Screen.lg`
      font-size: 0.75rem;
    `}
  }


  /*? global styles */

  body {
    overflow-x: hidden;
    background: var(--bg-color-white);
    font-family: "Poppins", sans-serif;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  section {
    margin-inline:  auto;
    width: min(100%, var(--max-width));
  }

  main {
    margin-top: var(--header-height);
  }

  a {
    color: var(--blue-color-1);
    transition: var(--transition);
  }

  a:hover {
    color: var(--blue-color-1);
  }

  /*? global class */

  .page {
    min-height: calc(
      100vh -
        (var(--header-height) + var(--footer-height) + var(--breadcrumb-height))
    );
  }

  .page-w-b {
    margin-top: var(--header-height);
    min-height: calc(100vh - (var(--header-height) + var(--footer-height)));
  }
`;

export default GlobalStyle;
