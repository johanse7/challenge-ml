import ContentCategoriesStyled from "./ProductCategories.styled"
import { IProductCategories } from "../../interfaces/IProductCategories"

const ProductCategories = ({ categories }: IProductCategories) => {
  return (
    <ContentCategoriesStyled>
      {categories.map((category, index) => (
        <article className="tag" key={`${category}-${index}`}>
          {category}
        </article>
      ))}
    </ContentCategoriesStyled>
  )
}

export default ProductCategories
