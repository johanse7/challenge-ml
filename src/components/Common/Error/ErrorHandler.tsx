import { useContext } from "react"
import { useHistory } from "react-router"
import { ErrorContext } from "../../../context/contextes/ErrorContext"
import { TransactionCodeEnum } from "../../../enums/CommonEnum"
import { MESSAGGE_ERROR_GENERIC } from "../../../helpers/Conts"
import { IErrorHandler } from "../../../interfaces/IErrorHandler"
import { ButtonStyled } from "../../../theme/common/Button.styled"
import ErrorHandlerStyled from "./ErrorHandler.styled"

const ErrorHandler = ({
  code = TransactionCodeEnum.notFound,
  message = MESSAGGE_ERROR_GENERIC,
}: IErrorHandler) => {
  const history = useHistory()

  const {
    errorHander: { dispatch },
  } = useContext(ErrorContext)

  const handelClickToSearchPage = () => {
    dispatch({ hasError: false })
    history.push("/")
  }

  return (
    <ErrorHandlerStyled>
      <h3 className="message-error">{message}!!</h3>
      {code != TransactionCodeEnum.ok && (
        <ButtonStyled variant="primary" onClick={handelClickToSearchPage}>
          <span>Buscar de nuevo!!</span>
        </ButtonStyled>
      )}
    </ErrorHandlerStyled>
  )
}

export default ErrorHandler
