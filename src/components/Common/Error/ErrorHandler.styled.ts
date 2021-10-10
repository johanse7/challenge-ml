import styled from "styled-components"
import { displays } from "../../../theme/base/Variables"

const ErrorHandlerStyled = styled.section`
  padding: 1rem 2.5rem;
  margin-top: 2.5rem;
  ${displays.flexColumn};
  gap: 1rem;

  & .message-error {
    font-size: 1.5em;
    color: ${({ theme }) => theme.palette.black};
    font-weight: 600;
  }

  & > button {
    max-width: 300px;
  }
`

export default ErrorHandlerStyled
