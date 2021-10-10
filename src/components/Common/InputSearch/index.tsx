import { forwardRef } from "react"
import { Input } from "../../../theme/common/Input.styled"
import { InputProps } from "../../../types/IHtmlPropsType"
import InputSearchContainer from "./InputSearch.styled"

const InputSearch = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <InputSearchContainer>
      <Input {...props} ref={ref} />
      <button className="icon-search" />
    </InputSearchContainer>
  )
})

export default InputSearch
