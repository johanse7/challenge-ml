import Skeleton from "react-loading-skeleton"
import { IBuyProduct } from "../../../interfaces/IBuyProduct"
import { ButtonStyled } from "../../../theme/common/Button.styled"
import TagPrice from "../../Common/TagPrice/TagPrice"
import BuyProductStyled from "./BuyProduct.styled"

const BuyProduct = (productInfo: IBuyProduct) => {
  return (
    <BuyProductStyled>
      <span className="sales-description">
        {productInfo?.condition && productInfo?.condition}
        {productInfo?.salesDescription && productInfo?.salesDescription}
      </span>
      <p className="title-product">
        {productInfo?.title || <Skeleton width={200} height={20} count={2} />}
      </p>
      {productInfo.price ? (
        <>
          <TagPrice
            currency={productInfo.currency}
            price={productInfo.price}
            decimals={productInfo.decimal}
            variantSize="big"
          />
          <ButtonStyled variant="primary">
            <span>Comprar</span>
          </ButtonStyled>
        </>
      ) : (
        <>
          <Skeleton width={100} height={40} />
          <Skeleton width={200} height={40} />
        </>
      )}
    </BuyProductStyled>
  )
}

export default BuyProduct
