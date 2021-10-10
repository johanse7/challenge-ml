import styled, { css } from "styled-components"
import { displays } from "../../../theme/base/Variables"
import IconShipping from "../../../theme/assets/Images/ic_shipping.png"
import IconShipping2x from "../../../theme/assets/Images/ic_shipping@2x.png"
import { respondTo } from "../../../theme/base/Mixins"

const ProductCardStyled = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey10};
  padding: 0.5rem 0;
  &:last-of-type {
    border: 0;
  }

  & .product-info-wrapper {
    ${displays.flexBetween};
    align-items: stretch;
    gap: 0.5rem;

    & .info-product {
      ${displays.flexBase};
      align-items: flex-start;
      gap: 1rem;
      & .content-image-product {
        width: 100px;
        height: 120px;
        ${respondTo.sm`
        width: 140px;
        height: 140px
      `}
      }

      & .content-description {
        color: ${({ theme }) => theme.palette.black};
        ${displays.flexColumn};
        align-items: flex-start;
        gap: 1rem;
        margin-top: 1rem;
        width: 170px;

        ${respondTo.sm`
        width: 450px;
      `}

        & .content-price {
          ${displays.flexBase};
          gap: 0.5rem;

          & .free-shipping {
            background-image: url(${IconShipping});
            background-repeat: no-repeat;
            background-position: center;
            width: 40px;
            height: 20px;

            ${respondTo.sm`
             background-image: url(${IconShipping2x});
             height: 40px;
          `}
          }
        }
      }
    }

    & .target-product {
      color: ${({ theme }) => theme.palette.grey30};
      font-size: 0.8rem;
      margin: 1.5rem 1.5rem 0 0;
    }
  }
`

export default ProductCardStyled
