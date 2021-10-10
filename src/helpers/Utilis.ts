export const formatDecimals = (value: number): string => {
  const decimals = String(value).substr(String(value).indexOf(".") + 1)
  return decimals === "0" ? `${decimals}0` : decimals
}
