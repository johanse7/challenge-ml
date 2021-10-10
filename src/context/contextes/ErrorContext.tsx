import { createContext } from "react"
import { ErrorStateType } from "../types/ErrorContextType"

export const ErrorContext = createContext<ErrorStateType>({
  errorHander: {
    state: {
      hasError: false,
    },
    dispatch: () => null,
  },
})
