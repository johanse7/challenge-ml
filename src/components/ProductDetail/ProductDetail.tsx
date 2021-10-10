import { IDetail } from "../../interfaces/IDetail"
import Img from "../Common/Img/Img"
import BuyProduct from "./BuyProduct"
import ProductDescription from "./ProductDescription"
import ProductDetailStyled from "./ProductDetail.styled"

const ProductDetail = ({ product }: IDetail) => {
  const salesDescription = product?.sold_quantity
    ? ` - ${product?.sold_quantity} vendidos`
    : undefined

  return (
    <ProductDetailStyled>
      <section className="header-detail">
        <Img
          src={product?.picture}
          alt={product?.title}
          classPlaceholder="place-holder-image-detail"
        />
        <BuyProduct
          salesDescription={salesDescription}
          currency={product?.price?.currency}
          decimal={product?.price?.decimals}
          price={product?.price?.amount}
          title={product?.title}
          condition={product?.condition}
        />
      </section>
      <ProductDescription description={product?.description} />
    </ProductDetailStyled>
  )
}

export default ProductDetail
