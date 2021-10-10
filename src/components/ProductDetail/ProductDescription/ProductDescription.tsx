import { IProductDescription } from "../../../interfaces/IProductDescription"
import { DescriptionStyled, TitleDescription } from "./ProductDescription.styled"
import Skeleton from "react-loading-skeleton"

const ProductDescription = ({ description }: IProductDescription) => (
  <>
    {description ? (
      <>
        <TitleDescription>Descripción del producto</TitleDescription>
        <DescriptionStyled>{description}</DescriptionStyled>
      </>
    ) : (
      <>
        <DescriptionStyled>
          <Skeleton height={30} width={300} />
          <Skeleton height={30} width={300} />
          <Skeleton height={30} width={300} />
          <Skeleton height={30} width={300} />
        </DescriptionStyled>
      </>
    )}
  </>
)

export default ProductDescription
