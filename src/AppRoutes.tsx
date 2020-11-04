import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch, RouteComponentProps, RouteChildrenProps
} from 'react-router-dom';
import PrivateRoute from './modules/Auth/PrivateRoute';
import LoginRoutes from './modules/Login/LoginRoutes';
import DashboardRoutes from './modules/Dashboard/DashboardRoutes';

export interface RouteProps {
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  render?: ((props: RouteComponentProps<any>) => React.ReactNode);
  children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
};

const AppRoutes = (props: any) => (
  <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          component={LoginRoutes}
        />
        <PrivateRoute
          path="/dashboard"
          component={DashboardRoutes}
        />
        <Redirect from="/" to="/login" />
      </Switch>
  </BrowserRouter>
);

export default AppRoutes;