import { IProductCard } from "../../../interfaces/IProductCard"
import { LinkBase } from "../../../theme/common/LinkBase"
import { DescriptionProductStyled } from "../../../theme/common/Paragraph.styled"
import Img from "../../Common/Img/Img"
import TagPrice from "../../Common/TagPrice/TagPrice"
import ProductCardStyled from "./ProductCard.styled"

const ProductCard = ({
  product: { title, id, free_shipping, price, picture, state_name },
}: IProductCard) => {
  return (
    <ProductCardStyled>
      <LinkBase to={`/item/${id}`} className="product-info-wrapper">
        <div className="info-product">
          <div className="content-image-product">
            <Img alt={title} src={picture} classPlaceholder="content-image-product" />
          </div>
          <div className="content-description">
            <div className="content-price">
              <TagPrice currency={price.currency} price={price.amount} variantSize={"small"} />
              {free_shipping && <div className="free-shipping" />}
            </div>
            <DescriptionProductStyled>{title}</DescriptionProductStyled>
          </div>
        </div>
        <span className="target-product">{state_name}</span>
      </LinkBase>
    </ProductCardStyled>
  )
}

export default ProductCard
