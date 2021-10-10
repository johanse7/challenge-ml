import styled from "styled-components"
import { respondTo } from "../../../theme/base/Mixins"
import { displays } from "../../../theme/base/Variables"

const BuyProductStyled = styled.div`
  color: ${({ theme }) => theme.palette.black};
  ${displays.flexColumn};
  align-items: stretch;
  gap: 0.5rem;
  width: 100%;

  ${respondTo.sm`
   width: 350px;
  `}

  & .sales-description {
    font-weight: 0.875rem;
  }

  & .title-product {
    font-size: 1.3rem;
    font-weight: bold;
    max-width: 300px;
  }

  & .price-detail {
    font-size: 2.875rem;
    font-weight: bold;
    margin: 1rem 0;
    position: relative;

    & .decimals {
      font-size: 1rem;
      font-weight: 400;
      position: absolute;
      top: 5px;
    }
  }
`

export default BuyProductStyled
