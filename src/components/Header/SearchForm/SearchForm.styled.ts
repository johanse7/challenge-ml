import styled from "styled-components"
import { respondTo } from "../../../theme/base/Mixins"

const SearchFormStyled = styled.form`
  & input {
    height: 30px;
    width: 260px;

    ${respondTo.sm`
      height: 45px;
      width: 600px;
      font-size: 1.125rem;
    `}
  }
`

export default SearchFormStyled
