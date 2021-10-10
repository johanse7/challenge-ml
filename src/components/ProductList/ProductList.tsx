import { IProductList } from "../../interfaces/IProductList"
import ProductCard from "./ProductCard"
import ProductListStyled from "./ProductList.styled"

const ProductList = ({ Products }: IProductList) => {
  return (
    <ProductListStyled>
      {Products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListStyled>
  )
}

export default ProductList
