import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { shemaSearchForm } from "../../../helpers/shemas/ShemaForms"
import { ISearch } from "../../../interfaces/ISearch"
import { ISearchForm } from "../../../interfaces/ISearchForm"
import InputSearch from "../../Common/InputSearch"
import SearchFormStyled from "./SearchForm.styled"

const SearchForm = ({ onClickSearch, search }: ISearch) => {
  const { register, handleSubmit, setValue } = useForm<ISearchForm>({
    resolver: yupResolver(shemaSearchForm),
  })

  useEffect(() => {
    if (search) setValue("search", search)
  }, [search, setValue])

  const onSubmit = ({ search }: ISearchForm) => onClickSearch(search)

  return (
    <SearchFormStyled onSubmit={handleSubmit(onSubmit)}>
      <InputSearch type="text" placeholder="Nunca dejes de buscar" {...register("search")} />
    </SearchFormStyled>
  )
}

export default SearchForm
