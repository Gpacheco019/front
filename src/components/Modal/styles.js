import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7px);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => `
    ${danger ? theme.colors.danger.main : theme.colors.neutral.black}
    `};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.neutral.grey};
  }
`;
