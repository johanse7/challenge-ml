import * as Yup from "yup"

export const shemaSearchForm = Yup.object({
  search: Yup.string().required(),
})
