import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ $hasError }) =>
    $hasError ? 'flex-end' : 'space-between'};
  margin-top: 32px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral.extraLightGrey};
  padding-bottom: 16px;

  strong {
    color: ${({ theme }) => theme.colors.neutral.black};
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.darkBlue};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.darkBlue};
    border-radius: 4px;
    padding: 8px 16px;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.darkBlue};
      color: ${({ theme }) => theme.colors.neutral.white};
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors.primary.darkBlue};
      font-weight: bold;
      margin-right: 8px;
    }

    img {
      transform: ${({ orderBy }) =>
        orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      strong {
        color: ${({ theme }) => theme.colors.neutral.black};
        font-size: 18px;
      }

      small {
        background: ${({ theme }) => theme.colors.primary.lightBlue};
        color: ${({ theme }) => theme.colors.primary.darkBlue};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      color: ${({ theme }) => theme.colors.neutral.grey};
      font-size: 14px;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    a {
      margin-right: 8px;
    }

    button {
      background-color: transparent;
      border: none;
    }
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;
`;

export const InputSearch = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: 25px;
  height: 50px;
  box-shadow: (0px 4px 10px rgba(0, 0, 0, 0.04));
  padding: 0 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.grey};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.primary.mainBlue};
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      color: ${({ theme }) => theme.colors.danger.main};
      font-size: 22px;
      display: block;
      margin-bottom: 8px;
    }
  }
`;
