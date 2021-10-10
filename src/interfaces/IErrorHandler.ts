import { TransactionCodeEnum } from "../enums/CommonEnum";

export interface IErrorHandler {
  hasError?: boolean
  code?: TransactionCodeEnum
  message?: string
}
