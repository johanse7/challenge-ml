import { useContext, useEffect, useState } from "react"
import Logger from "../classes/Logger"
import { ErrorContext } from "../context/contextes/ErrorContext"
import { TransactionCodeEnum } from "../enums/CommonEnum"
import { Error_GNERAL } from "../helpers/Conts"
import { IProductDetail } from "../interfaces/IProduct"
import { getProductDetailById } from "../services/ProductService"

const useProductDetail = (id: string) => {
  const [product, setProduct] = useState<IProductDetail | undefined>()
  const [notFoundData, setFoundData] = useState<boolean>(false)

  const {
    errorHander: { dispatch },
  } = useContext(ErrorContext)

  useEffect(() => {
    ;(async () => {
      try {
        const { item, author } = await getProductDetailById(id)
        Logger.info(author)
        setProduct(item)
      } catch (error) {
        Logger.error(error)
        if (error?.response?.status === TransactionCodeEnum.notFound) {
          setFoundData(true)
          return
        }
        dispatch({ hasError: true, code: error.response?.status, message: Error_GNERAL })
      }
    })()
  }, [id])

  return {
    product,
    notFoundData,
  }
}

export default useProductDetail
