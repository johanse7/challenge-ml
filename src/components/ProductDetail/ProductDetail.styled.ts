import styled from "styled-components"
import { displays } from "../../theme/base/Variables"

const ProductDetailStyled = styled.section`
  ${displays.flexColumn};
  align-items: stretch;
  padding: 1.5rem;
  gap: 1rem;

  & .header-detail {
    ${displays.flexWrap};
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    & .place-holder-image-detail {
      width: 300px;
      height: 300px;
    }
  }
`

export default ProductDetailStyled
