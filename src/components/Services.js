import React from "react";
import styled from "styled-components";

import { services } from "../utils/constants";

import Screen from "../styles/Screen";

import { Typography } from ".";

const Services = () => {
  return (
    <Wrapper>
      {services.map(({ id, name, icon, text }) => (
        <article key={id} className='service'>
          <div className='service__header'>
            {icon}
            <Typography.H3>{name}</Typography.H3>
          </div>
          <Typography.P>{text}</Typography.P>
        </article>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 1rem;
  display: grid;
  justify-items: center;
  gap: 1.5rem;
  ${Screen.md`  
    grid-template-columns: repeat(3, 1fr);
  `}

  .service {
    padding: 1rem;
    border: 0.2rem solid var(--accent-color-2);
    border-radius: var(--radius);
    transition: var(--transition);
    background: var(--primary-color);
      border-color: var(--secondary-color);
      color: var(--text-color);
    &:hover {
      border-color: var(--primary-color);
    }
  }

  .service__header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    svg {
      color: var(--accent-color-2);
      font-size: 2.5rem;
      margin-right: 1rem;
    }
  }

  p {
    text-align: justify;
    font-size: var(--fs-300);
  }
`;

export default Services;
