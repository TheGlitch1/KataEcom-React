import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Typography, Icons } from ".";

const Contact = () => {
  return (
    <Wrapper>
      <div className='contact__card'>
        <ButtonLink>
          <Link to="/about">Learn More About the Project</Link>
        </ButtonLink>
        <div className='contact__text'>
          <Typography.H2>About This Project</Typography.H2>
          <Typography.P>
            This project is a modern, front-end web application designed with a simple folder structure using React. It features a clean, responsive design and utilizes styled-components for modular and maintainable CSS.
          </Typography.P>
          <Typography.P>
            The application consumes fake API services to simulate data interactions, providing a seamless user experience without a backend. React's Context API is used for efficient state management, ensuring consistent data flow across various components.
          </Typography.P>
        </div>
      </div>
      <div className='social-links'>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
          <Icons.FaLinkedinStyled />
        </a>
        <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
          <Icons.FaGithubStyled />
        </a>
        <a href='https://medium.com' target='_blank' rel='noopener noreferrer'>
          <Icons.FaMediumStyled />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto ;
  padding: 0rem 2rem;

  .contact__card {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 4rem;
    width: 100%;
    margin-bottom: 2rem;
    padding: 2rem;
  }

  .contact__text {
    text-align: left;
    max-width: 60%;
    
    h2 {
      margin-bottom: 1rem;
      font-size: var(--fs-600);
      color: var(--link-color);
    }

    p {
      font-size: var(--fs-400);
      color: var(--text-color);
    }
  }

  .social-links {
    display: flex;
    gap: 1.5rem;

    a {
      color: var(----secondary-color);
      font-size: 2rem;
      transition: var(--transition);

      &:hover {
        color: var(--link-hover-color);
      }
    }
  }
`;

const ButtonLink = styled.div`
  max-width: 35%;
  align-self: flex-start;

  a {
    display: inline-block;
    background: var(--link-color);
    color: var(--text-color);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    transition: var(--transition);
    text-decoration: none;
    font-size: var(--fs-400);

    &:hover {
      background: var(--link-hover-color);
      color: var(--primary-color);
    }
  }
`;

export default Contact;
