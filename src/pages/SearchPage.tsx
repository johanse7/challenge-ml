import HeaderSearch from "../components/Header/HeaderSearch"
import { Helmet } from "react-helmet"
import { MainContent } from "../theme/common/MainContent.styled"
import { MainTitleStyled } from "../theme/common/Title.styled"

const SearchPage = () => (
  <>
    <Helmet>
      <title>Mercado Libre</title>
    </Helmet>
    <HeaderSearch />
    <MainContent>
      <MainTitleStyled>Busca productos marcas y mas ...</MainTitleStyled>
    </MainContent>
  </>
)

export default SearchPage
