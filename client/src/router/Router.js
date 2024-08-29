import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../common/components/layout/ScrollToTop';
import {
  AdminAuth,
  CreateForm,
  Header,
  IsLoggedIn,
  Login,
  RequireAuth,
  RoutePaths,
} from './index';

const QuestionsTab = lazy(() =>
  import('../pages/form/components/tab/question/QuestionsTab')
);
const ResponseTab = lazy(() =>
  import('../pages/form/components/tab/response/ResponseTab')
);
const Profile = lazy(() => import('../pages/profile/Profile'));
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const UserResponseForm = lazy(() =>
  import('../pages/form/components/responding/UserResponseForm')
);
const GenerateToken = lazy(() =>
  import('../pages/generateToken/GenerateToken')
);
const Report = lazy(() => import('../pages/report/Report'));
const ThanksPage = lazy(() => import('../pages/thanks/ThanksPage'));
const ResetPassword = lazy(() =>
  import('../pages/resetPassword/ResetPassword')
);
const Signup = lazy(() => import('../pages/signup/Signup'));
const Error = lazy(() => import('../pages/error/Error'));

const Router = () => (
  <BrowserRouter>
    <Suspense>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route element={<IsLoggedIn />}>
            {/* user login routes */}
            <Route path={RoutePaths.LOGIN} element={<Login />} />
            <Route
              path={RoutePaths.SIGNUP}
              element={
                <Suspense fallback={<>LOADING...</>}>
                  <Signup />
                </Suspense>
              }
            />
            {/* forgot password routes */}
            <Route
              path={RoutePaths.GENERATE_TOKEN}
              element={
                <Suspense fallback={<>LOADING...</>}>
                  <GenerateToken />
                </Suspense>
              }
            />
            <Route
              path={RoutePaths.RESET_PASSWORD}
              element={
                <Suspense fallback={<>LOADING...</>}>
                  <ResetPassword />
                </Suspense>
              }
            />
          </Route>
          <Route element={<RequireAuth />}>
            <Route element={<AdminAuth />}>
              <Route
                path={RoutePaths.FORM}
                element={
                  <Suspense fallback={<>LOADING...</>}>
                    <CreateForm />
                  </Suspense>
                }
              >
                <Route
                  path={RoutePaths.CREATE}
                  element={
                    <Suspense fallback={<>LOADING...</>}>
                      <QuestionsTab />
                    </Suspense>
                  }
                />
                <Route
                  path={RoutePaths.RESPONSE}
                  element={
                    <Suspense fallback={<>LOADING...</>}>
                      <ResponseTab />
                    </Suspense>
                  }
                />
              </Route>
            </Route>
            <Route
              path={RoutePaths.DASHBAORD}
              element={
                <Suspense fallback={<>LOADING...</>}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path={RoutePaths.USER}
              element={
                <Suspense fallback={<>LOADING...</>}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path={RoutePaths.SUBMIT_FORM}
              element={
                <Suspense fallback={<>LOADING...</>}>
                  <UserResponseForm />
                </Suspense>
              }
            />
            <Route
              path={RoutePaths.THANKS}
              element={
                <Suspense fallback={<>LOADING...</>}>
                  <ThanksPage />
                </Suspense>
              }
            />
            <Route
              path={RoutePaths.REPORT}
              element={
                <Suspense fallback={<>LOADING...</>}>
                  <Report />
                </Suspense>
              }
            />
          </Route>
          <Route
            path={RoutePaths.ERROR}
            element={
              <Suspense fallback={<>LOADING...</>}>
                <Error />
              </Suspense>
            }
          />
        </Routes>
      </ScrollToTop>
    </Suspense>
  </BrowserRouter>
);

export default Router;
