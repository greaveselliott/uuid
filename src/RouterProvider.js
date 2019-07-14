import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import RouterContext from "./RouterContext";

const Router = ({ children, InjectedRouter = BrowserRouter }) => (
  <InjectedRouter>
    <Route>
      {routeProps => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </InjectedRouter>
);

export default Router;
