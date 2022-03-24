import styled from "styled-components";

export const Button = styled.button<{ rounded?: boolean }>`
  user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  background-color: transparent;
  border: 0;

  ${(props) =>
    props.rounded &&
    `
    border: 1px solid ${props.theme.colors.mainBlack};
    border-radius: 30px;
    padding: 8px 16px;

  `}
`;
