import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 1px ${theme.COLORS.BLUE};
    }

    body {
      -webkit-font-smoothing: antialiased;
      background: ${theme.COLORS.GRAY_800};
      color: ${theme.COLORS.GRAY_50};
      
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    body,
    input,
    button,
    textarea {
      font-family: "Nunito", sans-serif;
      font-weight: 400;
      font-size: ${theme.FONTS.MD};
    }

    button {
      cursor: pointer;
    }
  `}
`;
