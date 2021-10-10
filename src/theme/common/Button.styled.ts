import styled from "styled-components"
import { IPropsButton } from "../../interfaces/IPropsButton"
import { displays } from "../base/Variables"

export const ButtonStyled = styled.button<IPropsButton>`
  background: ${({ variant, theme }) => theme.button[variant].backgroundColor};
  border-radius: 6px;
  border: 0;
  color: ${({ variant, theme }) => theme.button[variant].textColor};
  ${displays.flexCenter};
  font-size: 1.125rem;
  font-weight: 700;
  gap: 0.7rem;
  height: 48px;
  padding: 0.5rem 1rem;
  transition: all 500ms ease-out;
  user-select: none;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${({ theme, variant }) => theme.button[variant].hoverColor};
  }
`
