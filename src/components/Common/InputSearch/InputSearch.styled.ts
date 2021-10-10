import styled from "styled-components"
import IconSearch from "../../../theme/assets/Images/ic_Search.png"
import IconSearch2x from "../../../theme/assets/Images/ic_Search@2x.png"
import { respondTo } from "../../../theme/base/Mixins"

const InputSearchContainer = styled.div`
  position: relative;

  & .icon-search {
    cursor: pointer;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.grey10};
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${IconSearch});
    background-repeat: no-repeat;
    background-position: center;
    width: 40px;
    outline: 0;
    border: 0;

    ${respondTo.sm`
     width: 60px;
     background-image: url(${IconSearch2x});
  `}
  }
`

export default InputSearchContainer
