import React from "react"

export interface IRouteComponent {
  path: string | string[]
  name: string
  exact: boolean
  component: any
  props?: any
}
