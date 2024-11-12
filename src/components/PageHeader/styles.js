import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.mainBlue};
      font-weight: bold;
    }

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.neutral.black};
    font-size: 24px;
  }
`;
