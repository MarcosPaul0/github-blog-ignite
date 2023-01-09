import styled, { css } from "styled-components";

export const PublicationCardContainer = styled.div`
  ${({ theme }) => css`
    margin-top: -5.5rem;
    background: ${theme.COLORS.GRAY_700};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 10px;

    h1 {
      margin-top: 1.25rem;
      font-weight: bold;
      font-size: ${theme.FONTS.XXLG};
      line-height: 130%;
      width: 100%;
    }
  `}
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 0.5rem;

    span {
      color: ${theme.COLORS.GRAY_300};
      font-size: ${theme.FONTS.MD};
      line-height: 160%;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${theme.COLORS.GRAY_400};
      }
    }
  `}
`;
