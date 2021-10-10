import { IContextProps } from "../../interfaces/IContextProps";
import { IErrorHandler } from "../../interfaces/IErrorHandler";

export type ErrorStateType = {
  errorHander: IContextProps<IErrorHandler, IErrorHandler>
}