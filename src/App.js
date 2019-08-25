import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const AlertPage = React.lazy(() => import('pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('pages/ButtonPage'));
const PatientPage = React.lazy(() => import('pages/Patients'));
const PatientProfilePage = React.lazy(() => import('pages/PatientProfile'));
const FormPage = React.lazy(() => import('pages/FormPage'));
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('pages/DropdownPage'));
const InputGroupPage = React.lazy(() => import('pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('pages/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/ProgressPage'));
const AdministrationPage = React.lazy(() => import('pages/AdministrationPage'));
const TaskPage = React.lazy(() => import('pages/TaskPage'));
const ReportPage = React.lazy(() => import('pages/ReportPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/login-modal" component={AuthModalPage} />
                <Route exact path="/buttons" component={ButtonPage} />
                <Route exact path="/patients" component={PatientPage} />
                <Route exact path="/patient_profile" component={PatientProfilePage} />
                <Route exact path="/reports" component={ReportPage} />
                <Route exact path="/tasks" component={TaskPage} />
                <Route exact path="/alerts" component={AlertPage} />
                <Route exact path="/administrations" component={AdministrationPage} />
                <Route exact path="/badges" component={BadgePage} />
                <Route
                  exact
                  path="/button-groups"
                  component={ButtonGroupPage}
                />
                <Route exact path="/dropdowns" component={DropdownPage} />
                <Route exact path="/progress" component={ProgressPage} />
                <Route exact path="/modals" component={ModalPage} />
                <Route exact path="/input-groups" component={InputGroupPage} />
                <Route exact path="/forms" component={FormPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
