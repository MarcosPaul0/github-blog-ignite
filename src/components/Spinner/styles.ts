import styled, { css } from "styled-components";

export const SpinnerContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${theme.COLORS.GRAY_100};
      font-size: 2.5rem;
      animation-name: spin;
      animation-duration: 1.2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}
`;
