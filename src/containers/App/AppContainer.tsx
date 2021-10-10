import { ThemeProvider } from "styled-components"
import AppRouter from "../../routes/AppRouter"
import GlobalStyled from "../../theme/base/GlobalStyled"
import { defaultTheme } from "../../theme/ThemeUI"
import { SkeletonTheme } from "react-loading-skeleton"
import ErrorProvider from "../../context/providers/ErrorProvider"

const AppContainer = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        <SkeletonTheme color={"#E0E0E0"} highlightColor={"#F4F5F8"}>
          <ErrorProvider>
            <AppRouter />
          </ErrorProvider>
        </SkeletonTheme>
      </ThemeProvider>
    </>
  )
}

export default AppContainer
