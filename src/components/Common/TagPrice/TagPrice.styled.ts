import styled, { css } from "styled-components"
import { VariantTagPriceSize } from "../../../types/VariantTagPriceSize"

const variantTag = {
  small: css`
    font-size: 1.3rem;
  `,
  big: css`
    font-size: 2.875rem;
    margin: 1rem 0;
  `,
}

const TagPriceStyled = styled.div<{ variant: VariantTagPriceSize }>`
  font-weight: 600;
  position: relative;

  & .decimals {
    font-size: 1rem;
    font-weight: 400;
  }

  ${({ variant }) => variantTag[variant]}
`

export default TagPriceStyled
