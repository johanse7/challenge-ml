import { ITheme } from "../interfaces/ITheme"
import { fontSizes } from "./base/Variables"

export const defaultTheme: ITheme = {
  palette: {
    primary: "#FFE600",
    secondary: "#3483FA",
    grey10: "#EEEEEE",
    grey30: "#999999",
    grey50: "#666666",
    black: "#333333",
    white: "#FFFFFF",
  },
  button: {
    primary: {
      backgroundColor: "#3483FA",
      textColor: "#FFFFFF",
      hoverColor: "#2968C8",
    },
  },
  fontSizes,
}
