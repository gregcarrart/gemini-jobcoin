import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers';
import Navbar from '../../components/Navbar';
import PageLayout from '../../components/PageLayout';
import AppLayout from '../../components/AppLayout';

const DashboardRoutes = (props: any) => (
  <AppLayout>
    <Navbar />
    <PageLayout>
      <Switch>
        <Route
          exact
          path={props.match.url}
          component={Dashboard}
        />
      </Switch>
    </PageLayout>
  </AppLayout>
);

export default DashboardRoutes;
