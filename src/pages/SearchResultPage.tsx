import { useParams } from "react-router"
import ErrorHandler from "../components/Common/Error/ErrorHandler"
import HeaderSearch from "../components/Header/HeaderSearch"
import ProductCategories from "../components/ProductCategories"
import ProductList from "../components/ProductList"
import ProductSkeleton from "../components/ProductList/ProductSkeleton"
import { TransactionCodeEnum } from "../enums/CommonEnum"
import useProducts from "../hooks/UseProducts"
import { ISearchResultParms } from "../interfaces/IRouteParams"
import { ContentPage, MainContent } from "../theme/common/MainContent.styled"

const SearchResultPage = () => {
  const { search } = useParams<ISearchResultParms>()

  const { products, loading, categories } = useProducts(search)

  return (
    <>
      <HeaderSearch searchValue={search} />
      <ContentPage>
        {categories.length > 0 && <ProductCategories categories={categories} />}
        <MainContent>
          {loading ? (
            <ProductSkeleton rows={4} />
          ) : (
            <>
              {products.length > 0 ? (
                <ProductList Products={products} />
              ) : (
                <ErrorHandler
                  code={TransactionCodeEnum.ok}
                  message="No hay publicaciones que coincidan con tu búsqueda"
                />
              )}
            </>
          )}
        </MainContent>
      </ContentPage>
    </>
  )
}

export default SearchResultPage
