import { formatDecimals } from "../../../helpers/Utilis"
import { ITagPrice } from "../../../interfaces/ITagPrice"
import TagPriceStyled from "./TagPrice.styled"

const TagPrice = ({ price, decimals, currency, variantSize }: ITagPrice) => {
  const resultPrice = Math.trunc(price).toLocaleString(currency)
  return (
    <TagPriceStyled variant={variantSize}>
      <span>$ {resultPrice}</span>
      {decimals != undefined && <span className="decimals">{formatDecimals(decimals)}</span>}
    </TagPriceStyled>
  )
}

export default TagPrice
