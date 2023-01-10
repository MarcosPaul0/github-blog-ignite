import styled, { css } from "styled-components";

export const ProfileCardContainer = styled.div`
  ${({ theme }) => css`
    margin-top: -5.5rem;
    width: 100%;
    max-height: 13.25rem;
    height: 100%;
    padding: 2rem 2rem 2rem 2.5rem;
    background: ${theme.COLORS.GRAY_700};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      max-height: 9.25rem;
      height: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  `}
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    p {
      line-height: 160%;
      font-size: ${theme.FONTS.MD};
      color: ${theme.COLORS.GRAY_200};
      margin-top: 0.5rem;
    }
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: ${theme.FONTS.XXLG};
      line-height: 130%;
    }
  `}
`;

export const SocialContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.625rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      line-height: 160%;

      svg {
        color: ${theme.COLORS.GRAY_400};
      }
    }
  `}
`;
