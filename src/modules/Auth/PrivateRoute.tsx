import React, { useContext } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { MainContext } from '../../contexts';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { jwt } = useContext(MainContext);
  return (
    <Route
      {...rest}
      render={(props: any) =>  {
        if (jwt && jwt !== '') {
          return Component ? <Component {...props} /> : null;
        } else {
          return <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }}
          />
        }
      }}
    />
  );
};

export default withRouter(PrivateRoute);