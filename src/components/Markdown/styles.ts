import styled, { css } from "styled-components";

export const MarkdownContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    p,
    span,
    strong,
    em,
    a,
    ul,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    code {
      font-size: ${theme.FONTS.MD};
      color: ${theme.COLORS.GRAY_200};
      line-height: 160%;
      margin-bottom: 1rem;
    }

    strong,
    h1 h2 h3 h4 {
      font-weight: 700;
    }

    h1 {
      font-size: ${theme.FONTS.XXLG};
    }

    h2 {
      font-size: ${theme.FONTS.XLG};
    }

    h3 {
      font-size: ${theme.FONTS.LG};
    }

    h4,
    h5,
    h6 {
      font-size: ${theme.FONTS.MD};
    }

    a {
      color: ${theme.COLORS.BLUE};
      text-decoration: underline;
    }

    pre {
      background: ${theme.COLORS.GRAY_600};
      border-radius: 2px;
      padding: 1rem;
      margin: 1rem 0 2rem;
    }

    code {
    }
  `}
`;
