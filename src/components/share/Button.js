import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: var(--radius);
  transition: var(--transition);
  letter-spacing: 1px;
  font-size: var(--fs-400);
  font-weight: bold;

  a {
    display: inline-block;
  }
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          border: 0.2rem solid var(--blue-color-1);
          a {
            padding: 0.75rem 1.5rem;
          }
          &:hover {
            background: var(--blue-color-1);
            a {
              color: var(--color-white);
            }
          }
        `;

      case "secondary":
        return css`
          border: 0.2rem solid var(--red-color-1);
          color: var(--gray-color-1);
          a {
            padding: 0.75rem 1.5rem;
            color: var(--gray-color-1);
          }
          &:hover {
            background: var(--red-color-1);
            color: var(--color-white);
            a {
              color: var(--color-white);
            }
          }
        `;

      default:
        break;
    }
  }}
`;
export default Button;
