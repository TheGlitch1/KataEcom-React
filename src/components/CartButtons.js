import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Icons } from ".";

import { useProductsContext } from "../contexts/products_context";
import { useCartContext } from "../contexts/cart_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();

  return (
    <Wrapper>
      <NavLink
        to='/cart'
        onClick={closeSidebar}
        className={({ isActive }) =>
          isActive ? "cart__container active" : "cart__container"
        }
      >
        <div className='cart-icon'>
          <Icons.FaShoppingCartStyled />
          <span>{total_items}</span>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: var(--fs-400);
  }

  .cart__container {
    display: flex;
    margin-right: 2rem;
    border-bottom: 0.2rem solid transparent;
    transition: var(--transition);

    @media (max-width: 768px) {
      font-size: var(--fs-300);
    }

    &:hover,
    &.active {
      border-color: var(--link-color);
    }
  }

  .cart-icon {
    position: relative;
    margin-left: 0.4rem;

    span {
      position: absolute;
      top: -10px;
      right: -14px;
      padding: 0.1rem;
      min-width: 1.5rem;
      background-color: var(--accent-color-2);
      border-radius: 50%;
      color: var(--text-color);
      font-size: var(--fs-200);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default CartButtons;
