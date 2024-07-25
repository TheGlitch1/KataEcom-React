import styled from "styled-components";

const H1 = styled.h1`
  font-size: var(--fs-700);
  color: var(--text-color);
`;

const H2 = styled.h2`
  font-size: var(--fs-600);
  color: var(--text-color);
`;

const H3 = styled.h3`
  font-size: var(--fs-500);
  color: var(--link-color);
`;

const H4 = styled.h4`
  font-size: var(--fs-500);
  color: var(--link-color);
`;

const P = styled.p`
  font-size: var(--fs-500);
  color: var(--muted-text-color);
`;

const Typography = { H1, H2, H3, H4, P };

export default Typography;
