import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const InternalLinkContainer = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};
    font-weight: bold;
    font-size: ${theme.FONTS.XSM};
    text-decoration: none;
    transition: border-bottom 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid;
    border-color: transparent;
    padding: 0.1rem;

    svg {
      color: ${theme.COLORS.BLUE};
    }

    &:hover {
      border-color: ${theme.COLORS.BLUE};
    }
  `}
`;

export const ExternalLinkContainer = styled.a`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLUE};
    font-weight: bold;
    font-size: ${theme.FONTS.XSM};
    text-decoration: none;
    transition: border-bottom 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid;
    border-color: transparent;
    padding: 0.1rem;

    svg {
      color: ${theme.COLORS.BLUE};
    }

    &:hover {
      border-color: ${theme.COLORS.BLUE};
    }
  `}
`;