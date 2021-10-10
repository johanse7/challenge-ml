import { Link } from "react-router-dom"
import styled from "styled-components"
import logoSmall from "../../theme/assets/Images/Logo_ML.png"
import logoBig from "../../theme/assets/Images/Logo_ML@2x.png"
import { respondTo } from "../base/Mixins"

const LogoStyled = styled(Link)`
  background-repeat: no-repeat;
  background-image: url(${logoSmall});
  background-repeat: no-repeat, no-repeat;
  width: 70px;
  height: 100%;
  background-position: center left;

  ${respondTo.sm`
    background-image: url(${logoBig});
    width: 120px;
  `}
`

export default LogoStyled
