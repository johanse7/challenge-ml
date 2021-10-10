import { axiosInstance } from "../config/configAxios"
import { IResponseProduct, IResponseProductList } from "../interfaces/IResponseProductService"

export const getProductsByKeyWordSearch = async (search: string): Promise<IResponseProductList> => {
  const {
    data: { author, categories, items },
  } = await axiosInstance.get<IResponseProductList>(`/api/items/${search}`)

  return {
    author,
    categories,
    items,
  }
}

export const getProductDetailById = async (id: string): Promise<IResponseProduct> => {
  const { data } = await axiosInstance.get<IResponseProduct>(`/api/item/${id}`)
  return data
}