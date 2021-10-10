import { createGlobalStyle, css } from "styled-components"
import { respondTo } from "./Mixins"
import { displays } from "./Variables"

const GlobalStyled = createGlobalStyle`

  html {
    ${({ theme }) => {
      return css`
        font-size: ${theme.fontSizes.mainSize};
        ${respondTo.sm`
          font-size: ${theme.fontSizes.secondsize};
      `}
      `
    }}
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.palette.grey10};
    font-family: -apple-system,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif,sans-serif
  }
  *:focus {
    outline: none;
  }
    button:focus {
    outline: none;
  }
  div::-webkit-scrollbar {
    display: none;
  }
  div {
    scrollbar-width: none;
  }
    h1 {
    font-size: 40px;
    font-weight: bold;
  }
  h2 {
    font-size: 30px;

  }
  h3 {
    font-size: 20px;

  }
  h4 {
    font-size: 18px;
  }
  
.relevant-title {
  font-weight: bold;
}

.padding-content {
  padding:1rem;
}

.m-top1 {
  margin-top: .5rem;
}

.m-top-button1{
    margin: 1rem 0
}
.m-lef-right{
    margin: 0 1rem;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`

export default GlobalStyled
