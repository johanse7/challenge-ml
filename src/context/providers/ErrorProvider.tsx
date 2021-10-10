import { useState } from "react"
import { IErrorHandler } from "../../interfaces/IErrorHandler"
import { ErrorContext } from "../contextes/ErrorContext"
import { ErrorStateType } from "../types/ErrorContextType"

const ErrorProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<IErrorHandler>({ hasError: false })

  const dataProvider: ErrorStateType = {
    errorHander: {
      state: error,
      dispatch: setError,
    },
  }

  return <ErrorContext.Provider value={dataProvider}>{children}</ErrorContext.Provider>
}

export default ErrorProvider
