import { IRouteComponent } from "../../../interfaces/IRouteComponent"
import ProductDetailPage from "../../../pages/ProductDetailPage"
import SearchResultPage from "../../../pages/SearchResultPage"
import SearchPage from "../../../pages/SearchPage"
import ErrorHandler from "../../../components/Common/Error/ErrorHandler"

export const routeList: Array<IRouteComponent> = [
  {
    path: "/",
    name: "searchRouter",
    exact: true,
    component: SearchPage,
  },
  {
    path: "/items/:search",
    name: "ResultSearchRouter",
    exact: true,
    component: SearchResultPage,
  },
  {
    path: "/item/:id",
    name: "ProductDetailRouter",
    exact: true,
    component: ProductDetailPage,
  },
  {
    path: "*",
    name: "not found",
    component: ErrorHandler,
    exact: false,
  },
]
