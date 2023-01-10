import styled, { css } from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 54rem;
  padding: 0 1rem;
`;

export const SearchForm = styled.form`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;

  > button {
    visibility: hidden;
  }
`;

export const SearchInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: ${theme.FONTS.LG};
      line-height: 160%;
    }

    span {
      color: ${theme.COLORS.GRAY_300};
      font-size: ${theme.FONTS.SM};
      line-height: 160%;
    }
  `}
`;

export const PublicationsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
  padding-bottom: 2rem;
`;
