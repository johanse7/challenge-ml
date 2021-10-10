import { VariantButton } from "../types/VariantButtonType";

export interface IButtonStyled {
  textColor: string
  backgroundColor: string
  borderColor?: string
  hoverColor?: string
}


export interface IPropsButton {
  variant: VariantButton
  loadingButton?: boolean
  disabledButton?: boolean
  fullSize?: boolean
}