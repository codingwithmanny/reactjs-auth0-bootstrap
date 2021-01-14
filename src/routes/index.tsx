// IMPORTS
// ------------------------------------------------------------
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

// Route Components
import PrivateRoute from './private';

// Page Components
import LoginPage from '../pages/Login';
import DashboardPage from '../pages/Dashboard';
import AccountPage from '../pages/Account';
import NotFoundPage from '../pages/NotFound';
import AppLoader from '../components/AppLoader';

// MAIN ROUTE COMPONENT
// ------------------------------------------------------------
const Routes = () => {
  const {isAuthenticated, isLoading} = useAuth0();

  if (isLoading) return <AppLoader />;

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/login" />)}
      />
      <Route
        path="/login"
        exact
        render={() => (isAuthenticated ? <Redirect to="/dashboard" /> : <LoginPage />)}
      />
      <PrivateRoute path="/dashboard" exact component={DashboardPage} />
      <PrivateRoute path="/account" exact component={AccountPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

// EXPORTS
// ------------------------------------------------------------
export default Routes;
