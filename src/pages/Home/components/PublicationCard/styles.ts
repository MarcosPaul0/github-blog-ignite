import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const PublicationCardContainer = styled(Link)`
  ${({ theme }) => css`
    max-height: 16.25rem;
    height: 100%;
    max-width: 26rem;
    width: 100%;
    padding: 2rem;
    border-radius: 10px;
    background: ${theme.COLORS.GRAY_600};
    text-decoration: none;
    transition: box-shadow 0.2s;
    overflow: hidden;

    &:hover {
      box-shadow: 0 0 0 2px ${theme.COLORS.GRAY_400};
    }

    > main {
      margin-top: 1.25rem;
      width: 100%;
      max-width: 26rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h1 {
      color: ${theme.COLORS.GRAY_50};
      font-size: ${theme.FONTS.XLG};
      font-weight: bold;
      line-height: 160%;
    }

    time {
      color: ${theme.COLORS.GRAY_300};
      font-size: ${theme.FONTS.SM};
      line-height: 160%;
      white-space: nowrap;
    }
  `}
`;
