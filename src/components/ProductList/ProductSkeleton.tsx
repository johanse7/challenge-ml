import { IProductSkeleton } from "../../interfaces/IProductSkeleton"
import ProductCardStyled from "./ProductCard/ProductCard.styled"
import Skeleton from "react-loading-skeleton"
import ProductListStyled from "./ProductList.styled"
import { DescriptionProductStyled } from "../../theme/common/Paragraph.styled"

const ProductSkeleton = ({ rows }: IProductSkeleton) => {
  return (
    <ProductListStyled>
      {Array(rows)
        .fill(0)
        .map((_, index) => (
          <ProductCardStyled key={index}>
            <section className="product-info-wrapper">
              <div className="info-product">
                <Skeleton className="content-image-product" />
                <div className="content-description">
                  <div className="content-price">
                    <Skeleton width={80} height={15} />
                    <Skeleton circle width={30} height={30} />
                  </div>
                  <DescriptionProductStyled>
                    <Skeleton width={175} count={2} height={20} />
                    <Skeleton width={120} height={20} />
                  </DescriptionProductStyled>
                </div>
              </div>
              <Skeleton width={40} height={15} className="target-product" />
            </section>
          </ProductCardStyled>
        ))}
    </ProductListStyled>
  )
}

export default ProductSkeleton
