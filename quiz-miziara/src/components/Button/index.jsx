import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  opacity:.5;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 1;
  }
  &:disabled {
    background-color:rgba(0,0,0,0.9);
    cursor: not-allowed;
  }
`;



export default Button;