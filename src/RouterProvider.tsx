import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";

import RouterContext from "./RouterContext";

type Props = {
  children: React.ReactNode;
  InjectedRouter: new () => BrowserRouter | HashRouter;
};

const RouterProvider = ({ children, InjectedRouter }: Props) => (
  <InjectedRouter>
    <Route>
      {(routeProps: undefined) => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </InjectedRouter>
);

export default RouterProvider;
