import styled from "styled-components"
import { respondTo } from "../../theme/base/Mixins"
import { displays } from "../../theme/base/Variables"

const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.palette.primary};
  height: 50px;
  ${displays.flexCenter};
  gap: 1rem;

  ${respondTo.sm`
    height: 80px;
  `}
`

export default HeaderStyled
