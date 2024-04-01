import React from "react";
import { Link } from "react-router-dom";

import { Typography, Button } from ".";

import styled from "styled-components";
import Screen from "../styles/Screen";
import bannerImg from "../assets/banner-img.png";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <div>
          <Typography.H4>We are the #1 Community For</Typography.H4>
          <Typography.H1>DREAMERS</Typography.H1>
          <Typography.H2>
            THE <span>1%</span> KNOW HOW TO <br /> MAKE THINGS HAPPEN
          </Typography.H2>
          <Button variant="primary" className="header__link">
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
        <div className="hero__img">
          <img src={bannerImg} alt="Banner Image" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;

  .hero {
    display: block;
    padding: 2rem;
    ${Screen.md`
      gap: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `}
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: var(--blue-color-1)
  }

  h2 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: var(--color-black);

    span {
      color: var(--blue-color-1)
    }
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--color-black);
  }

  .header__link {
    z-index: 1;
    width: max-content;
  }

  .hero__img {
    align-self: flex-end;
    width: min(90%, 480px);
  }
`;

export default Hero;
