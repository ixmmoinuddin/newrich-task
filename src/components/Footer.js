import React from "react";

import { Typography } from ".";

import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography.P>
        &copy;{new Date().getFullYear()} by
        <a href='https://github.com/kamalheydari'> Newrich Network</a>, All rights
        reserved
      </Typography.P>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: var(--blue-color-1);
  height: var(--footer-height);
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    color: var(--color-white);
  }

  a {
    color: #fff;
    font-size: var(--fs-500);
  }
`;

export default Footer;
