import React from "react";

import { Breadcrumb, Typography } from "../components";

import styled from "styled-components";
import Screen from "../styles/Screen";

import img from "../assets/about_img.png";

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb title="About" />
      <Wrapper className="page">
        <div className="about__text">
          <Typography.H1>
            What is <span>Newrich.com?</span>
          </Typography.H1>
          <Typography.P>
            Newrich.com is an online networking and learning platform that
            connects people who are passionate about building the life of their
            dreams.
            <br />
            <br />
            Connect with instructors who can guide you along your path
          </Typography.P>
        </div>
        <div className="about__img">
          <img src={img} alt="about-img" />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 1rem;

  ${Screen.lg`
  grid-template-columns: repeat(2,1fr);
  gap:2rem;
`}
  .about__text {
    max-width: 600px;
  }
  .about__img {
    max-width: 700px;
    ${Screen.lg`
  grid-column: 2/4;
`}
  }

  h1 {
    margin-bottom: 2rem;

    span {
      color: var(--blue-color-1);
    }
  }
`;

export default AboutPage;
