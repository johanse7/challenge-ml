import { css } from "styled-components"

export const greyScale = {
  white: "#FFFFFF",
  transparentGrey: "rgba(44,44,44,0.58)",
  grey5: "#ECEDF1",
  grey10: "#E5E7ED",
  grey20: "#CBCCD8",
  grey30: "#A1A2BA",
  grey40: "#81819F",
  grey50: "#656182",
  grey60: "#3E405B",
  grey70: "#333152",
  grey75: "#616369",
  grey80: "#20213C",
  grey85: "#484848",
  grey90: "#1A1B26",
  black: "#000000",
}

export const fontSizes = { mainSize: "14px", secondsize: "16px" }

export const displays = {
  flexBase: css`
    display: flex;
    align-items: center;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,

  flexWrap: css`
    display: flex;
    flex-wrap: wrap;
  `,
}

export const breakpointsMedia = {
  xs: "480px",
  sm: "730px",
  md: "992px",
  lg: "1200px",
}

export const boxShadow = {
  shadow02: css`
    box-shadow: 0 2px 4px 4px rgba(45, 18, 65, 0.15);
  `,
  shadow04: css`
    box-shadow: 0 4px 8px 8px rgba(45, 18, 65, 0.15);
  `,

  shadow06: css`
    box-shadow: 0 5px 10px 8px rgba(45, 18, 65, 0.15);
  `,

  shadow12: css`
    box-shadow: 0 12px 24px 8px rgba(45, 18, 65, 0.15);
  `,

  shadow24: css`
    box-shadow: 0 24px 48px 8px rgba(45, 18, 65, 0.15);
  `,
}
