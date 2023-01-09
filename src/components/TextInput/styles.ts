import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-size: 1rem;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    background: ${theme.COLORS.GRAY_900};
    border: 1px solid ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_200};

    ::placeholder {
      color: ${theme.COLORS.GRAY_400};
    }
  `}
`