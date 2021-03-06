import { useParams } from "react-router"
import { Helmet } from "react-helmet"
import ErrorHandler from "../components/Common/Error/ErrorHandler"
import HeaderSearch from "../components/Header/HeaderSearch"
import ProductCategories from "../components/ProductCategories"
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
        {product?.categories && product.categories.length > 0 && (
          <ProductCategories categories={product.categories} />
        )}
        <MainContent>
          {notFoundData ? (
            <ErrorHandler code={TransactionCodeEnum.ok} message="Esta publicación no se encontró" />
          ) : (
            <>
              {product && (
                <Helmet>
                  <title>{product.title} | Mercado Libre</title>
                  <meta name="description" content={product.title} />
                </Helmet>
              )}
              <ProductDetail product={product} />
            </>
          )}
        </MainContent>
      </ContentPage>
    </>
  )
}

export default ProductDetailPage
