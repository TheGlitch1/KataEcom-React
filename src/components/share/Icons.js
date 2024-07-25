import styled, { css } from "styled-components";

import {
  FaBars,
  FaTimes,
  FaStore,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaTrash,
  FaLinkedin,
  FaGithub,
  FaMedium
} from "react-icons/fa";

import { BsFillGridFill, BsList } from "react-icons/bs";

//? base styles
const bigIcon = css`
  font-size: 2.5rem;
`;

const mediumIcon = css`
  font-size: 2rem;
`;

//? styled icons
const BsFillGridFillStyled = styled(BsFillGridFill)`
  color: var(--link-color);
  ${mediumIcon}
`;

const BsListStyled = styled(BsList)`
  color: var(--link-color);
  ${mediumIcon}
`;

const FaPlusStyled = styled(FaPlus)`
  ${mediumIcon}
  color: var(--accent-color-2);
`;

const FaTrashStyled = styled(FaTrash)`
  ${mediumIcon}
  color: var(--accent-color-2);
`;

const FaMinusStyled = styled(FaMinus)`
  ${mediumIcon}
  color: var(--accent-color-2);
`;

const FaTimesStyled = styled(FaTimes)`
  ${bigIcon}
  color: var(--accent-color-2);
`;

const FaBarsStyled = styled(FaBars)`
  ${bigIcon}
  color: var(--link-color);
`;

const FaStoreStyled = styled(FaStore)`
  ${bigIcon}
  color: var(--link-color);
`;

const FaShoppingCartStyled = styled(FaShoppingCart)`
  ${mediumIcon}
  color: var(--link-color);
`;

const FaLinkedinStyled = styled(FaLinkedin)`
  ${mediumIcon}
  color: var(--link-color);
`;

const FaGithubStyled = styled(FaGithub)`
  ${mediumIcon}
  color: var(--link-color);
`;

const FaMediumStyled = styled(FaMedium)`
  ${mediumIcon}
  color: var(--link-color);
`;

const Icons = {
  FaLinkedinStyled,
  FaGithubStyled,
  FaMediumStyled,
  FaBarsStyled,
  FaTimesStyled,
  FaStoreStyled,
  FaShoppingCartStyled,
  FaPlusStyled,
  FaMinusStyled,
  BsFillGridFillStyled,
  FaTrashStyled,
  BsListStyled,
};

export default Icons;
