import { useParams } from "react-router"
import ErrorHandler from "../components/Common/Error/ErrorHandler"
import HeaderSearch from "../components/Header/HeaderSearch"
import ProductDetail from "../components/ProductDetail"
import { TransactionCodeEnum } from "../enums/CommonEnum"
import useProductDetail from "../hooks/useProductDetail"
import { IProductDetailParams } from "../interfaces/IRouteParams"
import { ContentPage, MainContent } from "../theme/common/MainContent.styled"

const ProductDetailPage = () => {
  const { id } = useParams<IProductDetailParams>()

  const { product, notFoundData } = useProductDetail(id)

  return (
    <>
      <HeaderSearch />
      <ContentPage>
        <MainContent>
          {notFoundData ? (
            <ErrorHandler code={TransactionCodeEnum.ok} message="Esta publicación no se encontró" />
          ) : (
            <ProductDetail product={product} />
          )}
        </MainContent>
      </ContentPage>
    </>
  )
}

export default ProductDetailPage
