import HeaderStyled from "./HeaderSearch.styled"
import LogoStyled from "../../theme/common/Logo.styled."
import { useHistory } from "react-router-dom"
import SearchForm from "./SearchForm"
import { IHeader } from "../../interfaces/IHeader"
import { memo } from "react"

const HeaderSearch = memo(({ searchValue }: IHeader) => {
  console.log("HeaderSearch")

  const history = useHistory()

  const handleClickSearch = (search: string) => {
    history.push(`/items/${search}`)
  }

  return (
    <HeaderStyled>
      <LogoStyled to="/" />
      <SearchForm onClickSearch={handleClickSearch} search={searchValue} />
    </HeaderStyled>
  )
})

export default HeaderSearch
