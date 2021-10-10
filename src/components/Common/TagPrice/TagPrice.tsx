import { formatDecimals } from "../../../helpers/Utilis"
import { ITagPrice } from "../../../interfaces/ITagPrice"
import TagPriceStyled from "./TagPrice.styled"

const TagPrice = ({ price, decimals, currency, variantSize }: ITagPrice) => {
  const resultPrice = Math.trunc(price).toLocaleString(currency)
  return (
    <TagPriceStyled variant={variantSize}>
      <span>
        $ {resultPrice}
        {decimals != undefined && <sup className="decimals">{formatDecimals(decimals)}</sup>}
      </span>
    </TagPriceStyled>
  )
}

export default TagPrice
