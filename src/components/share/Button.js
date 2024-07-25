import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: var(--radius);
  transition: var(--transition);
  letter-spacing: 1px;
  font-size: var(--fs-400);
  font-weight: bold;
  color: var(--text-color);

  a {
    display: inline-block;
    color: inherit;
  }

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          border: 0.2rem solid var(--link-color);
          a {
            padding: 0.75rem 1.5rem;
          }
          &:hover {
            background: var(--link-color);
            a {
              color: var(--text-color);
            }
          }
        `;

      case "secondary":
        return css`
          border: 0.2rem solid var(--accent-color-2);
          color: var(--muted-text-color);
          a {
            padding: 0.75rem 1.5rem;
            color: var(--muted-text-color);
          }
          &:hover {
            background: var(--accent-color-2);
            color: var(--text-color);
            a {
              color: var(--text-color);
            }
          }
        `;

      default:
        break;
    }
  }}
`;

export default Button;
