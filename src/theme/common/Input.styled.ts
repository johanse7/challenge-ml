import styled from "styled-components"

export const Input = styled.input`
  background: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.black};
  border-radius: 2px;
  height: 40px;
  border: none;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
`
