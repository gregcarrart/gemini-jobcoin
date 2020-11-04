import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './containers';
import PageLayout from '../../components/PageLayout';
import AppLayout from '../../components/AppLayout';

const LoginRoutes = (props: any) => (
  <AppLayout>
    <PageLayout>
    <Switch>
        <Route
          exact
          path={props.match.url}
          component={Login}
        />
      </Switch>
    </PageLayout>
  </AppLayout>
);

export default LoginRoutes;
