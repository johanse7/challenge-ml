import { useContext } from "react"
import { ErrorContext } from "../../../context/contextes/ErrorContext"
import ErrorHandler from "../../Common/Error/ErrorHandler"

const MainLayout: React.FC = ({ children }) => {
  const {
    errorHander: { state },
  } = useContext(ErrorContext)

  if (state.hasError) return <ErrorHandler code={state.code} message={state.message} />

  return <>{children}</>
}

export default MainLayout
