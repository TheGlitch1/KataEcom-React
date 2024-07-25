import React from "react";
import styled from "styled-components";

import { Typography } from ".";

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography.P>
        &copy;{new Date().getFullYear()} by
        <a href='https://github.com/theGlitch1'> TheGlitch1</a>, All rights reserved
      </Typography.P>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: var(--primary-color);
  height: var(--footer-height);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;

  p {
    color: var(--text-color);
    font-size: var(--fs-300);
    margin: 0;
  }

  a {
    color: var(--link-color);
    font-size: var(--fs-300);
    margin-left: 0.5rem;
    transition: var(--transition);

    &:hover {
      color: var(--link-hover-color);
    }
  }
`;

export default Footer;
