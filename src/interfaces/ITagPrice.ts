import { VariantTagPriceSize } from "../types/VariantTagPriceSize"

export interface ITagPrice {
  price: number
  decimals?: number
  currency: string
  variantSize: VariantTagPriceSize
}
