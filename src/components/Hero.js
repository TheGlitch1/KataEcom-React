import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Typography, Button } from ".";
import heroImg from "../assets/ecommerce.png";

const Hero = () => {
  return (
    <Wrapper>
      <div className='hero'>
        <div className='text-content'>
          <Typography.H1 className='hero__title'>
            <span>Lorem</span> <br /> 
            Lorem ipsum dolor sit amet.
          </Typography.H1>
          <Button variant='primary' className='header__link'>
            <Link to='/products'>Shop Now</Link>
          </Button>
        </div>
        <div className='hero__img'>
          <img src={heroImg} alt='hero - img' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }

  .text-content {
    max-width: 600px;
  }

  .hero__title {
    margin: 0;
    font-size: var(--fs-600);
    color: var(--text-color);
    
    span {
      color: var(--link-color);
    }

    &::before {
      content: "";
      position: absolute;
      top: -0.5rem;
      left: -3rem;
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      background: var(--accent-color-2);
      z-index: -1;
    }
  }

  .header__link {
    margin-top: 1rem;

    a {
      color: var(--text-color);
      padding: 0.5rem 1rem;
      font-size: var(--fs-300);
    }

    a:hover {
      color: var(--link-hover-color);
    }
  }

  .hero__img {
    width: min(80%, 300px);
    align-self: center;
  }

  @media (min-width: 768px) {
    .hero {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }

    .text-content {
      max-width: 50%;
    }

    .hero__img {
      max-width: 400px;
      align-self: flex-end;
    }
  }
`;

export default Hero;
