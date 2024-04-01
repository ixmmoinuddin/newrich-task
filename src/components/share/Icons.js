import styled, { css } from "styled-components";

import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";

import { BsFillGridFill, BsList } from "react-icons/bs";

const bigIcon = css`
  font-size: 2.5rem;
`;

const mediumIcon = css`
  font-size: 2rem;
`;

const BsFillGridFillStyled = styled(BsFillGridFill)`
  color: var(--blue-color-1);
  ${mediumIcon}
`;

const BsListStyled = styled(BsList)`
  color: var(--blue-color-1);
  ${mediumIcon}
`;

const FaPlusStyled = styled(FaPlus)`
  ${mediumIcon}
  color: var(--blue-color-1);
`;

const FaMinusStyled = styled(FaMinus)`
  ${mediumIcon}
  color: var(--red-color-1);
`;

const FaTrashStyled = styled(FaTrash)`
  ${mediumIcon}
  color: var(--red-color-1);
`;

const FaTimesStyled = styled(FaTimes)`
  ${bigIcon}
  color: var(--blue-color-1);
`;

const FaBarsStyled = styled(FaBars)`
  ${bigIcon}
  color: var(--blue-color-1);
`;

const FaShoppingCartStyled = styled(FaShoppingCart)`
  ${mediumIcon}
  color: var(--color-white);
`;

const Icons = {
  FaBarsStyled,
  FaTimesStyled,
  FaShoppingCartStyled,
  FaPlusStyled,
  FaMinusStyled,
  BsFillGridFillStyled,
  FaTrashStyled,
  BsListStyled,
};

export default Icons;
