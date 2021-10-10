import ContentCategoriesStyled from "./ProductCategories.styled"
import { IProductCategories } from "../../interfaces/IProductCategories"

const ProductCategories = ({ categories }: IProductCategories) => {
  return (
    <ContentCategoriesStyled>
      {categories.map((category, index) => (
        <li className="tag" key={`${category}-${index}`}>
          {category}
        </li>
      ))}
    </ContentCategoriesStyled>
  )
}

export default ProductCategories
