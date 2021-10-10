import { useContext, useEffect, useState } from "react"
import Logger from "../classes/Logger"
import configEnv from "../config/ConfigEnv"
import { ErrorContext } from "../context/contextes/ErrorContext"
import { Error_GNERAL } from "../helpers/Conts"
// import Logger from "../classes/Logger"
import { IProduct } from "../interfaces/IProduct"
import { getProductsByKeyWordSearch } from "../services/ProductService"

const useProducts = (search: string) => {
  const [products, setProducts] = useState<Array<IProduct>>([])
  const [categories, setCategories] = useState<Array<string>>([])
  const [loading, setLoading] = useState<boolean>(true)

  const {
    errorHander: { dispatch },
  } = useContext(ErrorContext)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const { categories, items, author } = await getProductsByKeyWordSearch(search)

        Logger.info(author)

        const productsSlice = items.slice(0, Number(configEnv.maxShowProducts))
        setProducts(productsSlice)
        setCategories(categories)
        setLoading(false)
      } catch (error) {
        Logger.error(error)
        setLoading(false)
        dispatch({ hasError: true, code: error.response?.status, message: Error_GNERAL })
      }
    })()
  }, [search])

  return {
    products,
    categories,
    loading,
  }
}

export default useProducts
