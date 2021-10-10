import { BrowserRouter, Route, RouteComponentProps, Switch } from "react-router-dom"
import MainLayout from "../components/Theme/Layout/MainLayout"
import { routeList } from "../theme/assets/Data/RouteList"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          {routeList.map((route, index) => {
            return (
              <Route
                key={`${route.name}${index}`}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => {
                  return <route.component {...props} {...route.props} />
                }}
              />
            )
          })}
        </Switch>
      </MainLayout>
    </BrowserRouter>
  )
}

export default AppRouter
